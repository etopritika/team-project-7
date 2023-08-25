import React from 'react';

import SideBar from './SideBar/SideBar';
import HeaderUser from './Header/Header';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  return (
    <div>
      <HeaderUser />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;