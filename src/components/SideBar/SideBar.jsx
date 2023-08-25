import React from 'react';

import UserNav from './UserNavigation/UserNav';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';

export default function SideBar() {
  return (
    <div>
      <UserNav />
      <LogoutBtn />
    </div>
  );
}
