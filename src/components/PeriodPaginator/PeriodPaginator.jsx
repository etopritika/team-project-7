import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MonthViewPaginator } from './MonthViewPaginator';
import { DayViewPaginator } from './DayViewPaginator';
import { useDate } from 'hooks/useDate';
import { format, subDays, addDays, addMonths, subMonths } from 'date-fns';
import styles from './PeriodPaginator.module.css';

export const PeriodPaginator = ({ activePage }) => {
  const [activeBtn, setActiveBtn] = useState('');
  const [visibleDate, setVisibleDate] = useState(useDate());

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentDateFromUrl = new Date(location.pathname.split('/').pop());
    if (!isNaN(currentDateFromUrl.getTime())) {
      setVisibleDate(currentDateFromUrl);
    }
  }, [location]);

  const handleNextMonth = () => {
    setActiveBtn('next');

    const newVisibleDate = addMonths(visibleDate, 1);
    setVisibleDate(newVisibleDate);

    const newPath = `/user/calendar/month/${format(newVisibleDate, 'MMMMyyyy')}`;
    navigate(newPath);
  };

  const handlePrevMonth = () => {
    setActiveBtn('prev');

    const newVisibleDate = subMonths(visibleDate, 1);
    setVisibleDate(newVisibleDate);

    const newPath = `/user/calendar/month/${format(newVisibleDate, 'MMMMyyyy')}`;
    navigate(newPath);
  };

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

  return (
    <div className={styles.wrapper}>
      {activePage === 'month' && (
        <MonthViewPaginator
          visibleDate={visibleDate}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          activeBtn={activeBtn}
        />
      )}

      {(activePage === 'day' || activePage === 'statistics/day') && (
        <DayViewPaginator
          visibleDate={visibleDate}
          handlePrevDay={handlePrevDay}
          handleNextDay={handleNextDay}
          activeBtn={activeBtn}
        />
      )}
    </div>
  );
};
