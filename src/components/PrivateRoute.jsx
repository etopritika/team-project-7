import { Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export default function PrivateRoute ({ component: Component, redirectTo = '/' }) {
//   const { isLoggedIn } = useAuth();
  const shouldRedirect = false; //Тимчасово, потім замінити false -> !isLoggedIn

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};