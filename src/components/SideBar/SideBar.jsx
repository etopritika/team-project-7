import React from 'react';
import AuthNavigate from '../AuthNavigate/AuthNavigate';
import AuthSection from '../AuthSection/AuthSection';
import UserNav from './UserNavigation/UserNav';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';

export default function SideBar() {
  const isLoggedIn = false; // Тимчасово

  return (
    <>

      <AuthNavigate />
      {isLoggedIn ? (
        <div>
          <UserNav />
          <LogoutBtn />
        </div>
      ) : (
        <AuthSection />
      )}

      <AuthNavigate />
      {isLoggedIn ? <div>User Menu</div> : <AuthSection />}

    </>
  );
}
