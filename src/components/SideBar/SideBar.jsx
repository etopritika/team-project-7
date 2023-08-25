import React from 'react';
import Navigation from '../Navigation/Navigation';
import AuthSection from '../AuthSection/AuthSection';
import UserNav from './UserNavigation/UserNav';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';

export default function SideBar() {
  const isLoggedIn = false; // Тимчасово

  return (
    <>
      <Navigation />
      {isLoggedIn ? (
        <div>
          <UserNav />
          <LogoutBtn />
        </div>
      ) : (
        <AuthSection />
      )}
    </>
  );
}
