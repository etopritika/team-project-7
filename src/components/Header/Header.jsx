import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import OpenSidebarBtn from 'components/Buttons/OpenSidebarBtn/OpenSidebarBtn';
import AddFeedbackBtn from 'components/Buttons/AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import UserInfo from 'components/UserInfo/UserInfo';
import SideBar from 'components/SideBar/SideBar';
import HeaderTitle from './HeaderTitle/HeaderTitle';

function HeaderUser() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(() => {
  
    const path = location.pathname.split('/').pop();
    setCurrentPage(path);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsButtonVisible(false);
  };

  return (
    <header className={styles.header}>
      {isButtonVisible && <OpenSidebarBtn openBurgerMenu={toggleSidebar} />}
      {isSidebarOpen && <SideBar />}
      <HeaderTitle currentPage={currentPage} />
      <div className={styles.userInfo}>
        <AddFeedbackBtn />
        <ThemeToggler />
        <UserInfo />
      </div>
    </header>
  );
}

export default HeaderUser;