import React from 'react';
import UserNav from './UserNavigation/UserNav';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import styles from './SideBar.module.css';

export default function SideBar() {
  return (
    <>
      <div className={styles.sidebarstyle}>
        <UserNav />
        <LogoutBtn />
      </div>
    </>
  );
}
