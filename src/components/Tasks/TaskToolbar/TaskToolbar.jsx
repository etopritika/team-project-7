import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RiLoginCircleLine } from 'react-icons/ri';
import { SlPencil } from 'react-icons/sl';
import { PiTrashSimple } from 'react-icons/pi';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { usePopupState, bindMenu } from 'material-ui-popup-state/hooks';
import Notiflix from 'notiflix';

import styles from './TaskToolbar.module.css';
import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';
import { deleteTask, editTask } from 'redux/tasks/taskOperations';

const TaskToolbar = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const showConfirm = () => {
    Notiflix.Confirm.show(
      'Delete Task',
      'Are you sure you want to delete this task?',
      'Yes',
      'No',
      function okCb() {
        handleConfirmDelete();
        setTimeout(() => {
          Notiflix.Notify.success('Task deleted successfully!');
        }, 100);
      },
      function cancelCb() {
        setTimeout(() => {
          Notiflix.Notify.info('Task deletion canceled!');
        }, 100);
      },
      {
        width: '320px',
        borderRadius: '8px',
        titleColor: 'black',
        messageColor: 'black',
        okButtonBackground: '#3e85f3',
        cancelButtonBackground: '#e5edfa',
        cancelButtonColor: '#343434',
        fontFamily: 'Inter',
      }
    );
  };

  const handleConfirmDelete = () => {
    dispatch(deleteTask(task._id));
  };

  const handleDeleteBtn = () => {
    showConfirm();
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

    dispatch(editTask({ taskId: task._id, updatedData: updateTaskData }));
    Notiflix.Notify.success('Task moved successfully!');
  };

  return (
    <div className={styles.btnContainer}>
      <button
        className={`${styles.btn} ${styles.btnMenu}`}
        onClick={popupState.toggle}
      >
        <RiLoginCircleLine className={styles.btnIcon} />
      </button>
      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        className={styles.menu}
      >
        {filteredCategories.map(category => (
          <MenuItem
            key={category}
            onClick={() => updateCategory(category)}
            className={styles.items}
          >
            <div className={styles.menuItem}>
              <p className={styles.menuText}>{formatCategory(category)}</p>
              <RiLoginCircleLine
                className={`${styles.btnIcon} ${styles.btnIconHover}`}
              />
            </div>
          </MenuItem>
        ))}
      </Menu>
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
    </div>
  );
};

export default TaskToolbar;
