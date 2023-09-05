import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RiLoginCircleLine } from 'react-icons/ri';
import { SlPencil } from 'react-icons/sl';
import { PiTrashSimple } from 'react-icons/pi';
import styles from './TaskToolbar.module.css';
import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';
import { deleteTask, editTask } from 'redux/tasks/taskOperations';

const TaskToolbar = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleDeleteBtn = () => {
    dispatch(deleteTask(task._id));
  };

  const categories = ['to-do', 'in-progress', 'done'];
  const currentCategory = task.category;
  const filteredCategories = categories.filter(
    category => category !== currentCategory
  );

  const formatCategory = category =>
    category
      .split('-')
      .map((item, index) =>
        index === 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item
      )
      .join(' ');

  const updateCategory = category => {
    const updateTaskData = {
      title: task.title,
      start: task.start,
      end: task.end,
      priority: task.priority,
      date: task.date,
      category,
    };

    console.log(updateTaskData);
    dispatch(editTask({ taskId: task._id, updatedData: updateTaskData }));
    toggleMenu();
  };

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
      <button className={styles.btn} onClick={handleDeleteBtn}>
        <PiTrashSimple className={styles.btnIcon} />
      </button>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <TaskForm toggleModal={toggleModal} task={task} />
        </Modal>
      )}
      {isMenuOpen && (
        <div className={styles.menu}>
          {filteredCategories.map(category => (
            <div className={styles.menuItem} key={category}>
              <p className={styles.menuText}>{formatCategory(category)}</p>
              <RiLoginCircleLine
                className={`${styles.btnIcon} ${styles.btnIconHover}`}
                onClick={() => updateCategory(category)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskToolbar;
