import React from 'react';

import styles from './Header.module.css';
import AddFeedbackBtn from 'components/Buttons/AddFeedbackBtn/AddFeedbackBtn';
import  OpenSidebarBtn  from 'components/Buttons/OpenSidebarBtn/OpenSidebarBtn';
import UserInfo from 'components/UserInfo/UserInfo';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';



export const HeaderUser = ({ toggleBurgerMenu }) => {
  return (
    <div className={styles.header}>
      <OpenSidebarBtn openBurgerMenu={toggleBurgerMenu} />
     
        <ThemeToggler />
        <AddFeedbackBtn />
        <UserInfo />
      
    </div>
  );
};
