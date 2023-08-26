import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Suspense } from 'react';

const MainPage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const AccountPage = lazy(() => import('../pages/AccountPage'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/user" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<AccountPage />} />
          }
        />
      </Routes>
    </Suspense>
  );
};
