import { useState, useEffect, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import { parse } from 'date-fns';
// import css from './DayCalendarHead.module.css';
import getCustomDateArray from './daysHelper';

export default function DayCalendarHead() {
  //   const { current } = useParams();
  const { formattedDatesTablet, formattedDatesMobile } = getCustomDateArray();
  const [daysOfWeek, setDaysOfWeek] = useState(formattedDatesTablet);

  //   const formatCurrent = current.split('/').pop();
  //   const date = parse(formatCurrent, 'ddMMMMyyyy', new Date());

  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setDaysOfWeek(formattedDatesMobile);
    } else {
      setDaysOfWeek(formattedDatesTablet);
    }
  }, [formattedDatesMobile, formattedDatesTablet]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  console.log(daysOfWeek);

  //   return (
  //     <ul className={css.container}>
  //       {daysOfWeek.map(day => {
  //         const [weekday, date] = day.split(' '); // Розбиваємо рядок на дві частини

  //         return (
  //           <li key={day}>
  //             <button className={css.list__btn} type="button">
  //               <span className={css.day__name}>{weekday}</span>{' '}
  //               {/* Тут буде "Mon" */}
  //               <span className={css.day__number}>{date}</span>{' '}
  //               {/* Тут буде "7" */}
  //             </button>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
}
