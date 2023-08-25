import React from 'react';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/account">Account</NavLink>
        </li>
        <li>
          <NavLink to="/calendar">Calendar</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
