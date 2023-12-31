import { NavLink } from 'react-router-dom';
import { format, isSameMonth } from 'date-fns';
import styles from './PeriodTypeSelect.module.css';
import { useDate } from 'hooks/useDate';

export const PeriodTypeSelect = ({ activePage }) => {
  const urlDate = useDate();
  const today = new Date();

  const currentDate = format(urlDate, 'MMMMyyyy');
  const currentDay = format(urlDate, 'ddMMMMyyyy');
  const formattedToday = format(today, 'ddMMMMyyyy');

  const isToday = isSameMonth(urlDate, today);

  return (
    <div className={styles.periodTypeSelectMarkUp}>
      <NavLink
        to={`/user/calendar/month/${currentDate}`}
        className={
          activePage === 'month'
            ? styles.activeLink_month
            : styles.navLink_month
        }
      >
        Month
      </NavLink>
      <NavLink
        to={
          isToday
            ? `/user/calendar/day/${formattedToday}`
            : `/user/calendar/day/${currentDay}`
        }
        className={
          activePage === 'day' ? styles.activeLink_day : styles.navLink_day
        }
      >
        Day
      </NavLink>
    </div>
  );
};

