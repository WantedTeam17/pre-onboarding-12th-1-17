import { useAuthContext } from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
  const { accessToken } = useAuthContext();

  if (accessToken === null) return <Navigate to="/signin" />;

  return <Outlet />;
};

export default PrivateRoute;
