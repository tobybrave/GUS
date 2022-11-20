import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('gus-customer', null);
  const navigate = useNavigate();

  const login = async (data, prevPath) => {
    setUser(data);
    navigate('/downloads', prevPath ? { state: { prevPath } } : { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  /* eslint-disable */
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
