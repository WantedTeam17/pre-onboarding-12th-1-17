import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { Header } from './layout/Header';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <AppRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
