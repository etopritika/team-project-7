import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperations';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(logOut())}>Logout</button>;
};

export default LogoutBtn;
