import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperations';
import icons from '../../../img/icons.svg';
import css from './LogoutBtn.module.css';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <button className={css.LogoutBtn} onClick={() => dispatch(logOut())}>
      Log out
      <svg className={css.icon}>
        <use href={icons + '#log-out-01'}></use>
      </svg>
    </button>
  );
};

export default LogoutBtn;
