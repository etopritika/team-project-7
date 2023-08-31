import React, { useState, useEffect } from 'react';
import styles from './MonthCalendarHead.module.css';

const MonthCalendarHead = () => {
  const [daysOfWeek, setDaysOfWeek] = useState([
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ]);
  const daysOfWeekA = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setDaysOfWeek(daysOfWeekA);
    } else {
      setDaysOfWeek(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    }
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ul className={styles['month-calendar-head']}>
      {daysOfWeek.map((day, index) => (
        <li key={index} className={styles['day-of-week-header']}>
          {day}
        </li>
      ))}
    </ul>
  );
};

export default MonthCalendarHead;
