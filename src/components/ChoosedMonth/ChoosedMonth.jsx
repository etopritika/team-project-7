import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import MonthCalendarHead from 'components/Calendar/MonthCalendarHead/MonthCalendarHead';
import styles from './ChoosedMonth.module.css';
import CalendarTable from 'components/Calendar/CalendarTable/CalendarTable';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/taskOperations';

export default function ChoosedMonth() {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasksData = async () => {
      try {
        const fetchedTasks = await dispatch(fetchTasks());
        setTasks(fetchedTasks.payload);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        Notiflix.Notify.failure(`Error: ${error.message}`);
      }
    };

    fetchTasksData();
  }, [dispatch]);
  return (
    <div className={styles.month_container}>
      <MonthCalendarHead />
      <CalendarTable tasks={tasks} />
    </div>
  );
}
