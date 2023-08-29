import React from 'react';
import UserNav from './UserNavigation/UserNav';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import styles from './SideBar.module.css';
import SideBarLogo from './SideBarLogo/SideBarLogo';
import { RxCross2 } from 'react-icons/rx';

export default function SideBar({ isOpen, isClose }) {
  return (
    <div
      className={`${styles.sidebarstyle} ${
        isOpen ? styles.isOpenSidebarTest : ''
      }`}
    >
      <button className={styles.closeBtn} onClick={isClose} type="button">
        <RxCross2 className={styles.closeIcon} />
      </button>
      <SideBarLogo />
      <p className={styles.userPanName}>User Panel</p>
      <UserNav isCloseLink={isClose} />
      <LogoutBtn />
    </div>
  );
}
