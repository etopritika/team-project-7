import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../../../img/icons.svg';
import css from './UserNav.module.css';

function UserNav({ isCloseLink }) {
  return (
    <nav>
      <ul onClick={isCloseLink} className={css.navUl}>
        <li>
          <Link to="/user/account" className={css.nav}>
            <svg className={css.icons}>
              <use href={icons + '#user-check-01'}></use>
            </svg>
            My account
          </Link>
        </li>
        <li>
          <Link to="/user/calendar" className={css.nav}>
            <svg className={css.icons}>
              <use href={icons + '#calendar-check-02'}></use>
            </svg>
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/user/statistics" className={css.nav}>
            <svg className={css.icons}>
              <use href={icons + '#user-check-01'}></use>
            </svg>
            Statistics
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserNav;
