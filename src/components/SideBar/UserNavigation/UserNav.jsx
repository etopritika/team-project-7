import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user/account">Account</Link>
        </li>
        <li>
          <Link to="/user/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/user/statistics">Statistics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
