import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/taskOperations';

import TasksColumnList from '../Tasks/TasksColumnList/TasksColumnList';

export default function ChoosedDay() {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasksData = async () => {
      try {
        const fetchedTasks = await dispatch(fetchTasks());
        setTasks(fetchedTasks.payload);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasksData();
  }, [dispatch]);

  return (
    <>
      <TasksColumnList tasks={tasks} />
    </>
  );
}
