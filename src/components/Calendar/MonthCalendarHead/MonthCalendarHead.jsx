import React from 'react';
import styles from './MonthCalendarHead.module.css';

const MonthCalendarHead = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <ul className={styles['month-calendar-head']}>
      {daysOfWeek.map((day, index) => (
        <li key={index} className={styles['day-of-week']}>
          <span className={styles['day-of-week-style']}>
          {day}
          </span>
          
        </li>
      ))}
    </ul>
  );
};

export default MonthCalendarHead;

