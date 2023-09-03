import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { format } from 'date-fns';
import styles from './PeriodPaginator.module.css';

export const  DayViewPaginator = ({ visibleDate, handlePrevDay, handleNextDay, activeBtn }) => {
  return (
    <>
      <div className={styles.name_container_day}>
        <h1 className={styles.name}>{format(visibleDate, 'd MMM yyyy')}</h1>
      </div>
      <div className={styles.buttons_container}>
        <button
          className={`${styles.button} ${styles.button_left}`}
          type="button"
          onClick={handlePrevDay}
        >
          <FiChevronLeft className={activeBtn === 'prev' ? styles.icon_active : styles.icon} />
        </button>
        <button
          className={`${styles.button} ${styles.button_right}`}
          type="button"
          onClick={handleNextDay}
        >
          <FiChevronRight className={activeBtn === 'next' ? styles.icon_active : styles.icon} />
        </button>
      </div>
    </>
  );
};


