import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { parse } from 'date-fns';
import css from './DayCalendarHead.module.css';
import getCustomDateArray from './daysHelper';

export default function DayCalendarHead() {
  const { current } = useParams();
  const currentDate = useMemo(() => {
    return parse(current, 'ddMMMMyyyy', new Date());
  }, [current]);
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const { formattedDatesTablet, formattedDatesMobile } = getCustomDateArray(currentDate);
      if (window.innerWidth < 768) {
        setDaysOfWeek(formattedDatesMobile);
      } else {
        setDaysOfWeek(formattedDatesTablet);
      }
    };

    handleResize(); // Initialize daysOfWeek when the component mounts or currentDate changes

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentDate]);

  return (
    <ul className={css.container}>
      {daysOfWeek.map(day => {
        const [weekday, date] = day.split(' ');
        return (
          <li key={day}>
            <button className={css.list__btn} type="button">
              <span className={css.day__name}>{weekday}</span>{' '}
              <span className={css.day__number}>{date}</span>{' '}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
