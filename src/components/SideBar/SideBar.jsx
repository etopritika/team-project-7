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
      <h3 className={styles.userPanName}>User Panel</h3>
        <UserNav />
        <LogoutBtn />
      </div>
    </>
  );
}
