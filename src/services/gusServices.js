import axios from 'axios';
import { saveAs } from 'file-saver';

const baseUrl = 'http://localhost:5000/api/v1';

const config = (tokenValue) => ({
  headers: { Authorization: `Bearer ${tokenValue}` },
});

export const register = async (customer) => {
  const response = await axios.post(`${baseUrl}/register`, customer);

  return response;
};

export const login = async (user) => {
  const response = await axios.post(`${baseUrl}/login`, user);

  return response;
};

export const getVcards = async (token) => axios.get(`${baseUrl}/vcards`, config(token));

export const getVcard = async (id, pass, token) => {
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
