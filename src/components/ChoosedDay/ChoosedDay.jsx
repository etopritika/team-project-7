import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/taskOperations';

import TasksColumnList from '../Tasks/TasksColumnList/TasksColumnList';
import DayCalendarHead from '../Calendar/DayCalendarHead/DayCalendarHead';

export default function ChoosedDay() {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasksData = async () => {
      try {
        const fetchedTasks = await dispatch(fetchTasks());
        setTasks(fetchedTasks.payload);
      } catch (error) {
        Notiflix.Notify.failure(`Something went wrong: ${error.message}`);
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasksData();
  }, [dispatch]);

  return (
    <>
      <DayCalendarHead />
      <TasksColumnList tasks={tasks} />
    </>
  );
}
