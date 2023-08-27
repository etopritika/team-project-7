import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Suspense } from 'react';
import Spinner from './Spinner/Spinner';
import MainLayout from './MainLayout';
import CalendarPage from 'pages/CalendarPage';
import StatisticsPage from 'pages/StatisticsPage';
import DayCalendarHead from './Calendar/DayCalendarHead/DayCalendarHead';
import NotFoundPage from 'pages/NotFoundPage';

const MainPage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const AccountPage = lazy(() => import('../pages/AccountPage'));

export const App = () => {
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
              <PrivateRoute redirectTo="/" component={<AccountPage />} />
            }
          />
          <Route
            path="calendar"
            element={
              <PrivateRoute redirectTo="/" component={<CalendarPage />} />
            }
          >
            <Route
              path="statistics"
              element={
                <PrivateRoute redirectTo="/" component={<StatisticsPage />} />
              }
            />
          </Route>
          <Route
            path="calendar/day/:current"
            element={
              <PrivateRoute redirectTo="/" component={<DayCalendarHead />} />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
