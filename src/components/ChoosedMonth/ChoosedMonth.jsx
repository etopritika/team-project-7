import React from 'react';

import MonthCalendarHead from 'components/Calendar/MonthCalendarHead/MonthCalendarHead';
import styles from './ChoosedMonth.module.css';
import CalendarTable from 'components/Calendar/CalendarTable/CalendarTable';

export default function ChoosedMonth() {
  return (
    <div className={styles.month_container}>
      <MonthCalendarHead />
      <CalendarTable />
    </div>
  );
}
