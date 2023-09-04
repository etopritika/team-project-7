import { SlPencil } from 'react-icons/sl';
import styles from './TaskColumnCard.module.css';

export default function TaskColumnCard({ task }) {
  return (
    <div className={styles.containerCard}>
      <h3 className={styles.titleCard}>{task.title}</h3>
      <div className={styles.contentContainer}>
        <div className={styles.avatarContainer}>
          <img src={task.avatar} alt="User Avatar" className={styles.avatar} />
        </div>
        <div className={styles.priorityContainer}>{task.priority}</div>
        <div className={styles.btnContainer}>
          <button type="button" className={styles.btn}></button>
          <button type="button" className={styles.btn}>
            <SlPencil className={styles.btnIcon} />
          </button>
          <button type="button" className={styles.btn}></button>
        </div>
      </div>
    </div>
  );
}
