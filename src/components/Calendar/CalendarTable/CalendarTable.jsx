import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CalendarTable.module.css';
import Calendar from 'react-calendar';

export default function CalendarTable() {
  const [selectedDate, setSelectedDate] = useState(null);

  const dateClickHandler = date => {
    setSelectedDate(date);
  };

  const tileContent = ({ date }) => (
    <Link
      to={`/user/calendar/day/${date.toISOString()}`}
      className={styles['calendar-link']}
    >
      <div className={styles['calendar-link-content']}>
        <div className={styles['date-content']}>
          <span>{date.getDate()}</span>
        </div>

        <ul className={styles['calendar-day-content']}>
          <li className={styles['todo-text']}>To Do</li>
        </ul>
      </div>
    </Link>
  );

  return (
    <div className={styles['calendar-container']}>
      <div className={styles['calendar-wrapper']}>
        <Calendar
          value={selectedDate}
          onClickDay={dateClickHandler}
          tileClassName={() => styles['custom-tile']}
          tileContent={tileContent}
          showNavigation={false}
          showWeekNumbers={false}
          formatShortWeekday={() => ''}
        />
      </div>
    </div>
  );
}
