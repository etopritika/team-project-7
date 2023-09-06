
import React from 'react';
import { useLocation } from 'react-router-dom';
import { PeriodPaginator } from '../../PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from '../../PeriodTypeSelect/PeriodTypeSelect';
import styles from './CalendarToolbar.module.css';

export default function CalendarToolbar() {
  const location = useLocation();

  const activePage = () => {
    let active;
    if (location.pathname.includes('month')) {
      active = 'month';
    } else if (location.pathname.includes('day')) {
      active = 'day';
    }
    return active;
  };

  return (
    <div className={styles.wrapper}>
      <PeriodPaginator activePage={activePage()} />
      <PeriodTypeSelect activePage={activePage()} />
    </div>
  );
}
