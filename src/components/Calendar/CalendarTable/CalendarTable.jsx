import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CalendarTable.module.css';
import Calendar from 'react-calendar';
import { format, isToday, addMonths, subMonths } from 'date-fns';
import { useParams } from 'react-router-dom';


export default function CalendarTable({ tasks }) {
  const [, /*selectedDate*/ setSelectedDate] = useState(null);
  const { current } = useParams();

  const dateClickHandler = date => {
    setSelectedDate(date);
  };

  const isCurrentDate = date => {
    return isToday(date);
  };

  const isSameMonth = (date, targetMonth) => {
    return (
      date.getMonth() === targetMonth.getMonth() &&
      date.getFullYear() === targetMonth.getFullYear()
    );
  };

  const getTileContentStyles = date => {
    const currentMonth = current ? new Date(current) : new Date();
    const prevMonth = subMonths(currentMonth, 1);
    const nextMonth = addMonths(currentMonth, 1);

    if (isSameMonth(date, currentMonth)) {
      return '';
    } else if (isSameMonth(date, prevMonth) || isSameMonth(date, nextMonth)) {
      return styles['other-month'];
    } else {
      return '';
    }
  };

  const getTasksForDate = date => {

    return tasks.filter(task => {
      const taskDate = new Date(task.date); 
      return (
        taskDate.getDate() === date.getDate() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const getPriorityClass = priority => {
    switch (priority) {
      case 'low':
        return styles['todo-bg-item-low'];
      case 'medium':
        return styles['todo-bg-item-medium'];
      case 'high':
        return styles['todo-bg-item-high'];
      default:
        return '';
    }
  };

  const tileContent = ({ date }) => {
    const currentDay = format(date, 'ddMMMMyyyy');
    const dayTasks = getTasksForDate(date);
    return (
      <Link
        to={`/user/calendar/day/${currentDay}`}
        className={`${styles['calendar-link']} ${getTileContentStyles(date)}`}
      >
        <div className={styles['calendar-link-content']}>
          <div className={styles['date-content']}>
            <div
              className={`${styles['date-content-container-number']} ${
                isCurrentDate(date) ? styles['current-date'] : ''
              }`}
            >
              <div
                className={`${styles['date-content-number']} ${
                  isCurrentDate(date) ? styles['current-date'] : ''
                }`}
              >
                {date.getDate()}
              </div>
            </div>
          </div>

          <ul className={styles['calendar-day-task']}>
            {dayTasks.map(task => (
              <li
                key={task.title}
                className={`${styles['todo-items']} ${getPriorityClass(
                  task.priority
                )}`}
              >
                {task.title}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    );
  };

  return (
    <div className={styles['calendar-container']}>
      <div className={styles['calendar-wrapper']}>
        <Calendar
          value={current}
          onClickDay={dateClickHandler}
          tileContent={tileContent}
          showNavigation={false}
          showWeekNumbers={false}
          formatShortWeekday={() => ''}
        />
      </div>
    </div>
  );
}
