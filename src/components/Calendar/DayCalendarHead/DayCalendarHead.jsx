import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { parse } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import css from './DayCalendarHead.module.css';
import getCustomDateArray from './daysHelper';

export default function DayCalendarHead() {
  const { current } = useParams();
  const navigate = useNavigate();

  const currentDate = useMemo(() => {
    return parse(current, 'ddMMMMyyyy', new Date());
  }, [current]);

  const [daysOfWeek, setDaysOfWeek] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const dates = getCustomDateArray(currentDate);
      let formattedDates;

      if (window.innerWidth > 768) {
        formattedDates = dates.map(date => ({
          url: date.url,
          readable: date.tablet,
        }));
      } else {
        formattedDates = dates.map(date => ({
          url: date.url,
          readable: date.desktop,
        }));
      }

      setDaysOfWeek(formattedDates);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentDate]);

  const handleNavigate = date => {
    navigate(`/user/calendar/day/${date}`);
  };

  return (
    <ul className={css.container}>
      {daysOfWeek.map(({ url, readable }) => {
        const [dayName, dayNumber] = readable.split(' ');
        const isActiveDay = url === current;
        return (
          <li key={url}>
            <button
              onClick={() => handleNavigate(url)}
              className={css.list__btn}
              type="button"
            >
              <span className={css.day__name}>{dayName}</span>
              <span className={`${css.day__number} ${isActiveDay ? css.activeDay : ''}`}>{dayNumber}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
