import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router';

const access_token = process.env.REACT_APP_ACCEESS_TOKEN;

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const accessToken =
    localStorage.getItem(access_token) === '' ? null : localStorage.getItem(access_token);

  const setToken = accessToken => {
    localStorage.setItem(access_token, accessToken);
    navigate('/todo');
  };

  const removeToken = () => {
    localStorage.removeItem(access_token);
    navigate('/signin');
  };

  return (
    <AuthContext.Provider value={{ accessToken, setToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuthContext should be used within AuthProvider!');

  return context;
};
