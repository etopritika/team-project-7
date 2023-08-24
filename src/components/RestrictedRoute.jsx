// import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export default function RestrictedRoute ({ component: Component, redirectTo = '/' }){
//   const { isLoggedIn } = useAuth();
    const isLoggedIn = true; //Тимчасово, потім прибрати

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};