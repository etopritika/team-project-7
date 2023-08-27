import React, { useState } from 'react';
import styles from './Header.module.css';
import OpenSidebarBtn from 'components/Buttons/OpenSidebarBtn/OpenSidebarBtn';
import AddFeedbackBtn from 'components/Buttons/AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import UserInfo from 'components/UserInfo/UserInfo';
import SideBar from 'components/SideBar/SideBar';


function HeaderUser() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsButtonVisible(false);
  };

  return (
    <header className={styles.header}>
      {isButtonVisible && <OpenSidebarBtn openBurgerMenu={toggleSidebar} />}
      {isSidebarOpen && <SideBar />}
      <div className={styles.userInfo}>
        <ThemeToggler />
        <AddFeedbackBtn />
        <UserInfo />
      </div>
    </header>
  );
}

export default HeaderUser;
