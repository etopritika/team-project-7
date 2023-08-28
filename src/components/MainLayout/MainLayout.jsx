import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import SideBar from 'components/SideBar/SideBar';
import HeaderUser from 'components/Header/Header';


function MainLayout() {
  const userData = {
    email: 'user@example.com',
    name: 'John Doe',
    id: 123,
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log('Fetching user data...');
  }, []);

  return (
    <div className="container">
      <div className={`${styles.mainLayoutstyle} ${isSidebarOpen ? styles.isOpenSidebarTest : ''}`}>
        <SideBar isOpen={isSidebarOpen} />

        <div>
          <HeaderUser userData={userData} openBurgerMenu={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <Outlet />
        </div>
      </div>
    </div>
  );
}


export default MainLayout;
