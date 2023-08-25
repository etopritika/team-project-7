import React from 'react';

import SideBar from './SideBar/SideBar';
import HeaderUser from './Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <HeaderUser />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
