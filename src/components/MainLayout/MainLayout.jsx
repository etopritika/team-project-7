import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleKeyPress = event => {
    if (event.key === 'Escape') {
      closeSidebar();
    }
  };

  return (
    <div className="container">
      <div
        className={`${styles.mainLayoutstyle} ${
          isSidebarOpen ? styles.isOpenSidebarTest : ''
        }`}
      >
        {isSidebarOpen && (
          <div className={styles.backdrop} onClick={toggleSidebar} />
        )}

        <SideBar isOpen={isSidebarOpen} isClose={toggleSidebar} />

        <div className={styles.content__wrapper}>
          <Header
            openBurgerMenu={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
