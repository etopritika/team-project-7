import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import OpenSidebarBtn from 'components/Buttons/OpenSidebarBtn/OpenSidebarBtn';
import AddFeedbackBtn from 'components/Buttons/AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import UserInfo from 'components/UserInfo/UserInfo';

import HeaderTitle from './HeaderTitle/HeaderTitle';
import Modal from 'components/Modal/Modal';
import FeedbackForm from 'components/Forms/FeedbackForm/FeedbackForm';
import { useDispatch } from 'react-redux';
import { fetchOwnReview } from 'redux/reviews/reviewsOperations';

function Header({ openBurgerMenu, isSidebarOpen }) {
  const [currentPage, setCurrentPage] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOwnReview());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  useEffect(() => {
    const path = location.pathname;
    setCurrentPage(path);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      {!isSidebarOpen && <OpenSidebarBtn openBurgerMenu={openBurgerMenu} />}
      {windowWidth >= 1440 && <HeaderTitle currentPage={currentPage} />}
      <div className={styles.userInfo}>
        <AddFeedbackBtn toggleModal={toggleModal} />
        <ThemeToggler />
        <UserInfo />
      </div>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <FeedbackForm toggleModal={toggleModal} />
        </Modal>
      )}
    </header>
  );
}

export default Header;
