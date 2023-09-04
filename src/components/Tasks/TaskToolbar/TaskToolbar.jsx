import { RiLoginCircleLine } from 'react-icons/ri';
import { SlPencil } from 'react-icons/sl';
import { PiTrashSimple } from 'react-icons/pi';
import styles from './TaskToolbar.module.css';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';

const TaskToolbar = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn}>
        <RiLoginCircleLine className={styles.btnIcon} />
      </button>
      <button className={styles.btn}>
        <SlPencil className={styles.btnIcon} onClick={toggleModal} />
      </button>
      <button className={styles.btn}>
        <PiTrashSimple className={styles.btnIcon} />
      </button>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <TaskForm toggleModal={toggleModal} task={task} />
        </Modal>
      )}
    </div>
  );
};

export default TaskToolbar;
