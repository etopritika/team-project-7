import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CalendarTable.module.css';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import { useParams } from "react-router-dom";

export default function CalendarTable() {
  const [/*selectedDate*/, setSelectedDate] = useState(null);
  const {current} = useParams();

  const dateClickHandler = date => {
    setSelectedDate(date);
  };

  const tileContent = ({ date }) => {
    const currentDay = format(date, 'MMMMyyyy');
    return(<Link
      to={`/user/calendar/day/${currentDay}`}
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
    </Link>)
  };
  return (
    <div className={styles['calendar-container']}>
      <div className={styles['calendar-wrapper']}>
        <Calendar
          value={current}
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
