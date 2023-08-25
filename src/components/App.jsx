import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
// import Layout from './Layout';
import { Suspense } from 'react';

import routes from 'routes';
import RegisterForm from './Forms/RegisterForm/RegisterForm';
import LoginrForm from './Forms/LoginForm/LoginForm';
import MainPage from 'pages/MainPage';
import AccountPage from 'pages/AccountPage';
import CalendarPage from 'pages/CalendarPage';
import ChoosedMonth from './ChoosedMonth/ChoosedMonth';
import ChoosedDay from './ChoosedDay/ChoosedDay';
import StatisticsPage from 'pages/StatisticsPage';

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route>
          <Route element={<PubliceRourtes />}>
            <Route path={routes.mainPage} element={MainPage}></Route>
            <Route path={routes.registerPage} element={RegisterForm}></Route>
            <Route path={routes.loginPage} element={LoginrForm}></Route>
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path={routes.accountPage} element={AccountPage}></Route>
            <Route path={routes.calendarPage} element={CalendarPage}>
              <Route path={routes.calendarMonth} element={ChoosedMonth}></Route>
              <Route path={routes.calendarDay} element={ChoosedDay}></Route>
            </Route>
            <Route path={routes.statisticsPage} element={StatisticsPage}></Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

// return (
//   <Suspense fallback={null}>
//     <Routes>
//       <Route path="/" element={<MainPage />} />
//       <Route
//         path="/register"
//         element={
//           <RestrictedRoute redirectTo="/user" component={<RegisterPage />} />
//         }
//       />
//       <Route
//         path="/login"
//         element={
//           <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
//         }
//       />
//       <Route
//         path="/user"
//         element={
//           <PrivateRoute redirectTo="/login" component={<AccountPage />} />
//         }
//       />
//     </Routes>
//   </Suspense>
// );
