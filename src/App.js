import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import PageLayout from './layout/PageLayout';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <PageLayout />
        <AppRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
