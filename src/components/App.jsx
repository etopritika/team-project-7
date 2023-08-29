import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Suspense } from 'react';
import Spinner from './Spinner/Spinner';
import MainLayout from './MainLayout/MainLayout';
import DayCalendarHead from './Calendar/DayCalendarHead/DayCalendarHead';
import { refreshUser } from '../redux/auth/authOperations';

const MainPage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const AccountPage = lazy(() => import('../pages/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/user/calendar"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/user/calendar"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<MainLayout />} />
          }
        >
          <Route
            path="account"
            element={
              <PrivateRoute redirectTo="/login" component={<AccountPage />} />
            }
          />
          <Route
            path="calendar"
            element={
              <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
            }
          />
          <Route
            path="statistics"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<StatisticsPage />}
              />
            }
          />
          <Route
            path="calendar/day/:current"
            element={
              <PrivateRoute redirectTo="/" component={<DayCalendarHead />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
