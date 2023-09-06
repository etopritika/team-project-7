import React, { useState, useEffect } from 'react';
import styles from './MonthCalendarHead.module.css';

const MonthCalendarHead = () => {
  const [daysOfWeek, setDaysOfWeek] = useState([
    { id: 'mon', name: 'Mon' },
    { id: 'tue', name: 'Tue' },
    { id: 'wed', name: 'Wed' },
    { id: 'thu', name: 'Thu' },
    { id: 'fri', name: 'Fri' },
    { id: 'sat', name: 'Sat' },
    { id: 'sun', name: 'Sun' },
  ]);

  const handleResize = () => {
    const daysOfWeekA = [
      { id: 'mon', name: 'M' },
      { id: 'tue', name: 'T' },
      { id: 'wed', name: 'W' },
      { id: 'thu', name: 'T' },
      { id: 'fri', name: 'F' },
      { id: 'sat', name: 'S' },
      { id: 'sun', name: 'S' },
    ];
    if (window.innerWidth < 768) {
      setDaysOfWeek(daysOfWeekA);
    } else {
      setDaysOfWeek([
        { id: 'mon', name: 'Mon' },
        { id: 'tue', name: 'Tue' },
        { id: 'wed', name: 'Wed' },
        { id: 'thu', name: 'Thu' },
        { id: 'fri', name: 'Fri' },
        { id: 'sat', name: 'Sat' },
        { id: 'sun', name: 'Sun' },
      ]);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ul className={styles['month-calendar-head']}>
      {daysOfWeek.map(day => (
        <li key={day.id} className={styles['day-of-week-header']} id={day.id}>
          {day.name}
        </li>
      ))}
    </ul>
  );
};

export default MonthCalendarHead;
