import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Suspense } from 'react';
import Spinner from './Spinner/Spinner';
import MainLayout from './MainLayout/MainLayout';
import ChoosedDay from '../components/ChoosedDay/ChoosedDay';
import ChoosedMonth from "../components/ChoosedMonth/ChoosedMonth";
import { refreshUser } from '../redux/auth/authOperations';
import { format } from 'date-fns';
import {useDate} from "../hooks/useDate"

const MainPage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const AccountPage = lazy(() => import('../pages/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const currentDate = useDate();
  const currentMonth = useMemo(() => format(currentDate, 'MMMMyyyy'), [currentDate]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute
              redirectTo="/user/account"
              component={<MainPage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/user/account"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/user/account"
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
          >
            <Route index element={ <Navigate to={`month/${currentMonth}`} replace/>}/>
            <Route
            path="day/:current"
            element={
              <PrivateRoute redirectTo="/" component={<ChoosedDay />} />
            }
          />
          <Route
            path="month/:current"
            element={
              <PrivateRoute redirectTo="/" component={<ChoosedMonth />} />
            }
          />
          </Route>
          <Route
            path="statistics"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<StatisticsPage />}
              />
            }
          />
          
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
