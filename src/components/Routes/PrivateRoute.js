import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoggedIn } from 'redux/auth/selectors';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({redirectTo = '/login', component: Component }) => {
  const  isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
