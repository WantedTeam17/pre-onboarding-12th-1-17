import AppRoutes from './routes';
import { Suspense } from 'react';
import PageLayout from './layout/PageLayout';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { TodoContextProvider } from './context/TodoContext';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <TodoContextProvider>
          <PageLayout>
            <Suspense fallback={<div>Loading...</div>}>
              <AppRoutes />
            </Suspense>
          </PageLayout>
        </TodoContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
