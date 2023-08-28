import React from 'react';
import UserNav from './UserNavigation/UserNav';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import styles from './SideBar.module.css';
import SideBarLogo from './SideBarLogo/SideBarLogo';

export default function SideBar() {
  return (
    <>
      <div className={styles.sidebarstyle}>
      <SideBarLogo />
      <p className={styles.userPanName}>User Panel</p>
        <UserNav />
        <LogoutBtn />
      </div>
    </>
  );
}
