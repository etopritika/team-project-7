import { RiLoginCircleLine } from 'react-icons/ri';
import { SlPencil } from 'react-icons/sl';
import { PiTrashSimple } from 'react-icons/pi';
import styles from './TaskToolbar.module.css';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';

const TaskToolbar = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const deleteTask = () => {};

  return (
    <div className={styles.btnContainer}>
      <button
        className={`${styles.btn} ${styles.btnMenu}`}
        onClick={toggleMenu}
      >
        <RiLoginCircleLine className={styles.btnIcon} />
      </button>
      <button className={styles.btn} onClick={toggleModal}>
        <SlPencil className={styles.btnIcon} />
      </button>
      <button className={styles.btn} onClick={deleteTask}>
        <PiTrashSimple className={styles.btnIcon} />
      </button>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <TaskForm toggleModal={toggleModal} task={task} />
        </Modal>
      )}
      {isMenuOpen && (
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <p className={styles.menuText}>In progress</p>
            <RiLoginCircleLine
              className={styles.btnIcon}
              onClick={toggleMenu}
            />
          </div>
          <div className={styles.menuItem}>
            <p className={styles.menuText}>Done</p>
            <RiLoginCircleLine
              className={styles.btnIcon}
              onClick={toggleMenu}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskToolbar;
