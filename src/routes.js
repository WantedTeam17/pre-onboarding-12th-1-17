import { lazy } from 'react';
import PublicRoute from './pages/redirect/PublicRoute';
import PrivateRoute from './pages/redirect/PrivateRoute';
import { Navigate, Route, Routes } from 'react-router-dom';

const SignInPage = lazy(() => import('./pages/auth/SignInPage'));
const SignUpPage = lazy(() => import('./pages/auth/SignUpPage'));
const NotFoundPage = lazy(() => import('./pages/notFound/NotFoundPage'));
const TodoPage = lazy(() => import('./pages/todo/TodoPage'));

export default function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Navigate replace to="/todo" />} />
        <Route path="/todo" element={<TodoPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
