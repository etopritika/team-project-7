import { RiLoginCircleLine } from 'react-icons/ri';
import { SlPencil } from 'react-icons/sl';
import { PiTrashSimple } from 'react-icons/pi';
import styles from './TaskToolbar.module.css';

const TaskToolbar = ({ task }) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn}>
        <RiLoginCircleLine className={styles.btnIcon} />
      </button>
      <button className={styles.btn}>
        <SlPencil className={styles.btnIcon} />
      </button>
      <button className={styles.btn}>
        <PiTrashSimple className={styles.btnIcon} />
      </button>
    </div>
  );
};

export default TaskToolbar;
