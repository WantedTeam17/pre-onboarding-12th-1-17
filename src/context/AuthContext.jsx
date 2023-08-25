import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router';

const ACCESS_TOKEN = 'access_token';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const accessToken =
    localStorage.getItem(ACCESS_TOKEN) === '' ? null : localStorage.getItem(ACCESS_TOKEN);

  const setToken = accessToken => {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    navigate('/todo');
  };

  const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN);
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
