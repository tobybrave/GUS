import axios from 'axios';
import { saveAs } from 'file-saver';

const baseUrl = 'http://localhost:5000/api/v1';
let token;
const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const config = (tokenValue) => ({
  headers: { Authorization: tokenValue },
});

export const register = async (customer) => {
  const response = await axios.post(`${baseUrl}/register`, customer);
  localStorage.setItem('gus-customer', JSON.stringify(response.data.user));
  setToken(response.data.user.token);

  return response;
};

export const getUser = () => {
  const gusCustomer = localStorage.getItem('gus-customer');
  const customer = JSON.parse(gusCustomer);
  if (customer) {
    setToken(customer.token);
  }
  return customer;
};

export const getVcards = async () => axios.get(`${baseUrl}/vcards`);

export const getVcard = async (id, pass) => {
  const result = await axios({
    method: 'post',
    url: `${baseUrl}/vcards/${id}`,
    data: {
      password: pass,
    },
    responseType: 'blob',
    ...config(token),
  });

  const fileName = result.headers['content-type'].split('name=')[1];
  const blob = new Blob([result.data], { type: 'text/vcard;charset=utf-8' });
  saveAs(blob, fileName);
};

export const blacklisted = async () => {
  const response = await axios.get(`${baseUrl}/contacts/blacklisted`);
  return response.data;
};
