import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { TodoContextProvider } from './context/TodoContext';
import PageLayout from './layout/PageLayout';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <TodoContextProvider>
          <PageLayout />
          <AppRoutes />
        </TodoContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
