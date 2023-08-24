import { Navigate, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import TodoPage from './pages/todo/TodoPage';
import PublicRoute from './pages/redirect/PublicRoute';
import PrivateRoute from './pages/redirect/PrivateRoute';

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
