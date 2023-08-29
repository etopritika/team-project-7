import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import OpenSidebarBtn from 'components/Buttons/OpenSidebarBtn/OpenSidebarBtn';
import AddFeedbackBtn from 'components/Buttons/AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import UserInfo from 'components/UserInfo/UserInfo';

import HeaderTitle from './HeaderTitle/HeaderTitle';
import Modal from 'components/Modal/Modal';

function HeaderUser({ openBurgerMenu, isSidebarOpen }) {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    setCurrentPage(path);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      {!isSidebarOpen && <OpenSidebarBtn openBurgerMenu={openBurgerMenu} />}
      <HeaderTitle currentPage={currentPage} />
      <div className={styles.userInfo}>
        <AddFeedbackBtn toggleModal={toggleModal} />
        <ThemeToggler />
        <UserInfo />
      </div>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <div>
            <button type="button" onClick={toggleModal}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </header>
  );
}

export default HeaderUser;
