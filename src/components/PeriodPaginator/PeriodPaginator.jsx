import { format, subDays, addDays, addMonths, subMonths } from 'date-fns';
import { useState } from 'react';
import { ReactComponent as IconShevronLeft } from '../../img/icons.svg#shevron-left';
import { ReactComponent as IconShevronRight } from '../../img/icons.svg#shevron-right';
import styles from './PeriodPaginator.module.css';
import { useNavigate } from 'react-router-dom';
import { useDate } from 'hooks/useDate';

export const PeriodPaginator = ({ activePage }) => {
  const [activeBtn, setActiveBtn] = useState('');

  const navigate = useNavigate();
  const urlDate = useDate();

  const handleNextDay = () => {
    setActiveBtn('next');

    const date = addDays(urlDate, 1);
    navigate(`/user/calendar/day/${format(date, 'ddMMMyyyy')}`);
  };

  const handlePrevDay = () => {
    setActiveBtn('prev');

    const date = subDays(urlDate, 1);
    navigate(`/user/calendar/day/${format(date, 'ddMMMyyyy')}`);
  };

  const handleNextMonth = () => {
    setActiveBtn('next');

    const date = addMonths(urlDate, 1);
    navigate(`/user/calendar/month/${format(date, 'MMMMyyyy')}`);
  };

  const handlePrevMonth = () => {
    setActiveBtn('prev');

    const date = subMonths(urlDate, 1);
    navigate(`/user/calendar/month/${format(date, 'MMMMyyyy')}`);
  };

  return (
    <div className={styles.wrapper}>
      {activePage === 'month' && (
        <>
          <div className={styles.name_container}>
            <h1 className={styles.name}>{format(urlDate, 'MMMM yyyy')}</h1>
          </div>
          <div className={styles.buttons_container}>
            <button
              className={`${styles.button} ${styles.button_left}`}
              type="button"
              onClick={handlePrevMonth}
            >
              <IconShevronLeft
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
              id={'2'}
              onClick={handleNextMonth}
            >
              <IconShevronRight
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
          <div className={styles.name_container}>
            <h1 className={styles.name}>{format(urlDate, 'd MMM yyyy')}</h1>
          </div>
          <div className={styles.buttons_container}>
            <button
              className={`${styles.button} ${styles.button_left}`}
              type="button"
              onClick={handlePrevDay}
            >
              <IconShevronLeft
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
              <IconShevronRight
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
