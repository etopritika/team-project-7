import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import icons from '../../../img/icons.svg';
import css from './UserNav.module.css';
import { BsBarChart } from 'react-icons/bs';

function UserNav({ isCloseLink }) {
  const location = useLocation();
  function isActive(pathname) {
    return location.pathname.includes(pathname);
  }
  
  return (
    <nav>
      <ul onClick={isCloseLink} className={css.navUl}>
        <li>
          <Link to="/user/account" className={`${css.nav} ${isActive('/user/account') ? css.active : ''}`}>
            <svg className={css.icons}>
              <use href={icons + '#user-check-01'}></use>
            </svg>
            My account
          </Link>
        </li>
        <li>
          <Link to="/user/calendar" className={`${css.nav} ${isActive('/user/calendar') ? css.active : ''}`}>
            <svg className={css.icons}>
              <use href={icons + '#calendar-check-02'}></use>
            </svg>
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/user/statistics" className={`${css.nav} ${isActive('/user/statistics') ? css.active : ''}`}>
            <div>
              <BsBarChart className={css.icons} />
            </div>
            Statistics
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserNav;
