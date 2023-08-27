import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.css';
import SideBar from 'components/SideBar/SideBar';
import  HeaderUser  from 'components/Header/Header';

function MainLayout() {

  const userData = {
    email: 'user@example.com',
    name: 'John Doe',
    id: 123,

  };

  useEffect(() => {

    console.log('Fetching user data...');
  }, []);

  return (
    <div className={styles.fullPageWrapper}>
      <div className={styles.container}>
        <SideBar />

        <div>
          <HeaderUser userData={userData} />

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
