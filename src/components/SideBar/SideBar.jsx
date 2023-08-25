import React from 'react';
import UserNav from './UserNavigation/UserNav';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';

export default function SideBar() {
  const isLoggedIn = false; // Тимчасово

  return (
    <>
    <span>SideBar</span>
        <div>
          <UserNav />
          <LogoutBtn />
        </div>
    </>
  );
}
