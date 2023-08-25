
import AddFeedbackBtn from 'components/Buttons/AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import UserInfo from 'components/UserInfo/UserInfo';
import React from 'react';

const HeaderUser = () => {
  return (
    <div>
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />
    </div>
  );
};

export default HeaderUser;
