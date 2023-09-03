// CalendarToolbar.js

// PeriodPaginator.js

import React, { useState, useEffect } from 'react';
import { format, subDays, addDays, addMonths, subMonths } from 'date-fns';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import styles from './PeriodPaginator.module.css';
import { useNavigate } from 'react-router-dom';
import { useDate } from 'hooks/useDate';
import { useLocation } from 'react-router-dom'; 

export const PeriodPaginator = ({ activePage }) => {
  const [activeBtn, setActiveBtn] = useState('');
  const [visibleDate, setVisibleDate] = useState(useDate());
  console.log(activePage)

  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const currentDateFromUrl = new Date(location.pathname.split('/').pop());
    if (!isNaN(currentDateFromUrl.getTime())) {
      setVisibleDate(currentDateFromUrl);
    }
  }, [location]); 

  const handleNextDay = () => {
    setActiveBtn('next');

    const newVisibleDate = addDays(visibleDate, 1);
    setVisibleDate(newVisibleDate);
   const newPath = activePage === 'statistics/day'
      ? `/user/statistics/day/${format(newVisibleDate, 'ddMMMMyyyy')}`
      : `/user/calendar/day/${format(newVisibleDate, 'ddMMMMyyyy')}`;
    navigate(newPath);
  };

  const handlePrevDay = () => {
    setActiveBtn('prev');

    const newVisibleDate = subDays(visibleDate, 1);
    setVisibleDate(newVisibleDate);
    const newPath = activePage === 'statistics/day'
      ? `/user/statistics/day/${format(newVisibleDate, 'ddMMMMyyyy')}`
      : `/user/calendar/day/${format(newVisibleDate, 'ddMMMMyyyy')}`;
    navigate(newPath);
  };

  const handleNextMonth = () => {
    setActiveBtn('next');

    const newVisibleDate = addMonths(visibleDate, 1);
    setVisibleDate(newVisibleDate);
    navigate(`/user/calendar/month/${format(newVisibleDate, 'MMMMyyyy')}`);
  };

  const handlePrevMonth = () => {
    setActiveBtn('prev');

    const newVisibleDate = subMonths(visibleDate, 1);
    setVisibleDate(newVisibleDate);
    navigate(`/user/calendar/month/${format(newVisibleDate, 'MMMMyyyy')}`);
  };

  return (
    <div className={styles.wrapper}>
      {activePage === 'month' && (
        <>
          <div className={styles.name_container_month}>
            <h1 className={styles.name}>{format(visibleDate, ' MMM yyyy')}</h1>
          </div>
          <div className={styles.buttons_container}>
            <button
              className={`${styles.button} ${styles.button_left}`}
              type="button"
              onClick={handlePrevMonth}
            >
              <FiChevronLeft
                className={
                  activeBtn === 'prev'
                    ? `${styles.icon_active}`
                    : `${styles.icon}`
                }
              />
            </button>
            <button
              className={`${styles.button} ${styles.button_right}`}
              type="button"
              onClick={handleNextMonth}
            >
              <FiChevronRight
                className={
                  activeBtn === 'next'
                    ? `${styles.icon_active}`
                    : `${styles.icon}`
                }
              />
            </button>
          </div>
        </>
      )}
      

      {activePage === 'day' && (
        <>
          <div className={styles.name_container_day}>
            <h1 className={styles.name}>{format(visibleDate, 'd MMM yyyy')}</h1>
          </div>
          <div className={styles.buttons_container}>
            <button
              className={`${styles.button} ${styles.button_left}`}
              type="button"
              onClick={handlePrevDay}
            >
              <FiChevronLeft
                className={
                  activeBtn === 'prev'
                    ? `${styles.icon_active}`
                    : `${styles.icon}`
                }
              />
            </button>
            <button
              className={`${styles.button} ${styles.button_right}`}
              type="button"
              onClick={handleNextDay}
            >
              <FiChevronRight
                className={
                  activeBtn === 'next'
                    ? `${styles.icon_active}`
                    : `${styles.icon}`
                }
              />
            </button>
          </div>
        </>
      )}
      {activePage === 'statistics/day' && (
        <>
          <div className={styles.name_container_day}>
            <h1 className={styles.name}>{format(visibleDate, 'd MMM yyyy')}</h1>
          </div>
          <div className={styles.buttons_container}>
            <button
              className={`${styles.button} ${styles.button_left}`}
              type="button"
              onClick={handlePrevDay}
            >
              <FiChevronLeft
                className={
                  activeBtn === 'prev'
                    ? `${styles.icon_active}`
                    : `${styles.icon}`
                }
              />
            </button>
            <button
              className={`${styles.button} ${styles.button_right}`}
              type="button"
              onClick={handleNextDay}
            >
              <FiChevronRight
                className={
                  activeBtn === 'next'
                    ? `${styles.icon_active}`
                    : `${styles.icon}`
                }
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
