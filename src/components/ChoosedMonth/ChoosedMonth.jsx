import React from 'react';
// import CalendarTable from 'components/Calendar/CalendarTable/CalendarTable';
import MonthCalendarHead from 'components/Calendar/MonthCalendarHead/MonthCalendarHead';
import styles from './ChoosedMonth.module.css';

export default function ChoosedMonth() {
  return (
    <div className={styles.month_container}>
      <MonthCalendarHead />
      {/* <CalendarTable /> */}
    </div>
  );
}
