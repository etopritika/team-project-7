// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './CalendarTable.module.css';
// import Calendar from 'react-calendar';
// import { format, isToday, addMonths, subMonths } from 'date-fns';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import tasks from "../CalendarTable/tasks.json"

export default function CalendarTable() {
  // const [, /*selectedDate*/ setSelectedDate] = useState(null);
  // const { current } = useParams();

  // const tasks = useSelector(state => state.tasks.items);

  // const dateClickHandler = date => {
  //   setSelectedDate(date);
  // };

  // const isCurrentDate = date => {
  //   return isToday(date);
  // };

  // const isSameMonth = (date, targetMonth) => {
  //   return (
  //     date.getMonth() === targetMonth.getMonth() &&
  //     date.getFullYear() === targetMonth.getFullYear()
  //   );
  // };

  // const getTileContentStyles = date => {
  //   const currentMonth = current ? new Date(current) : new Date();
  //   const prevMonth = subMonths(currentMonth, 1);
  //   const nextMonth = addMonths(currentMonth, 1);

  //   if (isSameMonth(date, currentMonth)) {
  //     return '';
  //   } else if (isSameMonth(date, prevMonth) || isSameMonth(date, nextMonth)) {
  //     return styles['other-month'];
  //   } else {
  //     return '';
  //   }
  // };

  // const getTasksForDate = date => {
  //   // Фільтруємо завдання, що належать до вказаної дати
  //   return tasks.filter(task => {
  //     const taskDate = new Date(task.date); // date дата таски
  //     return (
  //       taskDate.getDate() === date.getDate() &&
  //       taskDate.getMonth() === date.getMonth() &&
  //       taskDate.getFullYear() === date.getFullYear()
  //     );
  //   });
  // };

  // const tileContent = ({ date }) => {
  //   const currentDay = format(date, 'ddMMMMyyyy');
  //   const dayTasks = getTasksForDate(date);
  //   return (
  //     <Link
  //       to={`/user/calendar/day/${currentDay}`}
  //       className={`${styles['calendar-link']} ${getTileContentStyles(date)}`}
  //     >
  //       <div className={styles['calendar-link-content']}>
  //         <div className={styles['date-content']}>
  //           <div
  //             className={`${styles['date-content-container-number']} ${
  //               isCurrentDate(date) ? styles['current-date'] : ''
  //             }`}
  //           >
  //             <div
  //               className={`${styles['date-content-number']} ${
  //                 isCurrentDate(date) ? styles['current-date'] : ''
  //               }`}
  //             >
  //               {date.getDate()}
  //             </div>
  //           </div>
  //         </div>

  //         <ul className={styles['calendar-day-task']}>
  //           {/* Відображаємо завдання для цього дня */}
  //           {dayTasks.map(task => (
  //             <li key={task.id} className={styles['todo-items']}>
  //               {task.title}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </Link>
  //   );
  // };

  // return (
  //   <div className={styles['calendar-container']}>
  //     <div className={styles['calendar-wrapper']}>
  //       <Calendar
  //         value={current}
  //         onClickDay={dateClickHandler}
  //         tileContent={tileContent}
  //         showNavigation={false}
  //         showWeekNumbers={false}
  //         formatShortWeekday={() => ''}
  //       />
  //     </div>
  //   </div>
  // );
}
