import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoggedIn } from 'redux/auth/selectors';

export const RestrictedRoute = ({redirectTo = '/contacts', component: Component }) => {
  const  isLoggedIn = useSelector(selectLoggedIn);

  return  isLoggedIn? <Navigate to={redirectTo} /> : Component;
};


/* export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component; */