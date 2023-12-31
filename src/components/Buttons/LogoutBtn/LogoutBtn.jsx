import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperations';
import icons from '../../../img/icons.svg';
import css from './LogoutBtn.module.css';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async() => {
    await dispatch(logOut())
    navigate("/login")
  }

  return (
    <button className={css.LogoutBtn} onClick={() => handleClick()}>
      Log out
      <svg className={css.icon}>
        <use href={icons + '#log-out-01'}></use>
      </svg>
    </button>
  );
};

export default LogoutBtn;
