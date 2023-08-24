import { useAuthContext } from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
  const { accessToken } = useAuthContext();

  if (accessToken !== null) return <Navigate to="/todo" />;

  return <Outlet />;
};

export default PublicRoute;
