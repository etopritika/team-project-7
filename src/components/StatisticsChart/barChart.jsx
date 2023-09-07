import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTasks } from '../../redux/tasks/taskOperations';
import { format, parse, isSameDay, isSameMonth } from 'date-fns';
import './barChart.css';

const BarChart = () => {
  const dispatch = useDispatch();
  const { current } = useParams();
  const parsedDate = parse(current, 'ddMMMMyyyy', new Date());
  const monthOfInterest = parsedDate.getMonth();
  const formattedDate = format(parsedDate, 'yyyy-MM-dd');
  const [events, setEvents] = useState([]);
  const [monthEvents, setMonthEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(fetchTasks());
        const dayFilteredPayload = res.payload.filter(task =>
          task.date === formattedDate
        );
        const monthFilteredPayload = res.payload.filter(task => {
          const taskDate = new Date(task.date);
          return taskDate.getMonth() === monthOfInterest;
        });
        setEvents([...dayFilteredPayload]);
        setMonthEvents([...monthFilteredPayload]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, formattedDate, monthOfInterest]);


  // useEffect(() => {
  //   setCurrentMonth(currentDate.getMonth());
  // }, [currentDate]);

  const todaysTasks = events.filter(event =>
    isSameDay(new Date(event.date), parsedDate)
  );
  const tasksForMonth = monthEvents.filter(event =>
    isSameMonth(new Date(event.date), parsedDate)
  );

  const todoByDay = todaysTasks.filter(
    event => event.category === 'to-do'
  ).length;
  const inProgressByDay = todaysTasks.filter(
    event => event.category === 'in-progress'
  ).length;
  const doneByDay = todaysTasks.filter(
    event => event.category === 'done'
  ).length;
  const allTasksByDay = todoByDay + inProgressByDay + doneByDay;

  const todoPercentageForDay =
    allTasksByDay > 0 ? (todoByDay / allTasksByDay) * 100 : 0;
  const inProgressPercentageForDay =
    allTasksByDay > 0 ? (inProgressByDay / allTasksByDay) * 100 : 0;
  const donePercentageForDay =
    allTasksByDay > 0 ? (doneByDay / allTasksByDay) * 100 : 0;

  const todoForMonth = tasksForMonth.filter(
    event => event.category === 'to-do'
  ).length;
  const inProgressForMonth = tasksForMonth.filter(
    event => event.category === 'in-progress'
  ).length;
  const doneForMonth = tasksForMonth.filter(
    event => event.category === 'done'
  ).length;
  const totalTasksForMonth = todoForMonth + inProgressForMonth + doneForMonth;

  const todoPercentageForMonth = (todoForMonth / totalTasksForMonth) * 100 || 0;
  const inProgressPercentageForMonth =
    (inProgressForMonth / totalTasksForMonth) * 100 || 0;
  const donePercentageForMonth = (doneForMonth / totalTasksForMonth) * 100 || 0;

  const maxHeight = 234;
  const heightForTodoDay = (maxHeight * todoPercentageForDay) / 100;
  const heightForInProgressDay = (maxHeight * inProgressPercentageForDay) / 100;
  const heightForDoneDay = (maxHeight * donePercentageForDay) / 100;

  const heightForTodoMonth = (maxHeight * todoPercentageForMonth) / 100;
  const heightForInProgressMonth =
    (maxHeight * inProgressPercentageForMonth) / 100;
  const heightForDoneMonth = (maxHeight * donePercentageForMonth) / 100;

  // const handlePreviousDay = () => {
  //   const previousDate = new Date(currentDate);
  //   previousDate.setDate(previousDate.getDate() - 1);
  //   setCurrentDate(previousDate);
  // };

  // const handleNextDay = () => {
  //   const nextDate = new Date(currentDate);
  //   nextDate.setDate(nextDate.getDate() + 1);
  //   setCurrentDate(nextDate);
  // };

  return (
    <div className="statistickImg">
      <div className="statistic_centr">
        <div className="line"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
        <div className="line5"></div>
        <div className="line6"></div>
        <div className="x-axis">
          <span className="x-axis-span">0</span>
          <span className="x-axis-span">20</span>
          <span className="x-axis-span">40</span>
          <span className="x-axis-span">60</span>
          <span className="x-axis-span">80</span>
          <span>100</span>
          <span className="tasks_text">Tasks</span>
        </div>

        <div className="chart_todo">
          <div className="bar_day" style={{ height: `${heightForTodoDay}px` }}>
            <span className="bar-label">
              {todoPercentageForDay.toFixed(0)}%
            </span>
          </div>
        </div>

        <span className="nameBar">To Do</span>
        <div className="chart month_todo">
          <div className="bar" style={{ height: `${heightForTodoMonth}px` }}>
            <span className="bar-label_month">
              {todoPercentageForMonth.toFixed(0)}%
            </span>
          </div>
        </div>

        <div className="chart_in_progres">
          <div
            className="bar_day"
            style={{ height: `${heightForInProgressDay}px` }}
          >
            <span className="bar-label_inProgresDay">
              {inProgressPercentageForDay.toFixed(0)}%
            </span>
          </div>
        </div>
        <span className="nameBar_progress">In Progress</span>

        <div className="chart month_progress">
          <div
            className="bar"
            style={{ height: `${heightForInProgressMonth}px` }}
          >
            <span className="bar-label_inProgres">
              {inProgressPercentageForMonth.toFixed(0)}%
            </span>
          </div>
        </div>

        <div className="chart_done">
          <div className="bar_day" style={{ height: `${heightForDoneDay}px` }}>
            <span className="bar-label_todo">
              {donePercentageForDay.toFixed(0)}%
            </span>
          </div>
        </div>
        <span className="nameBar_done">Done</span>
        <div className="chart month_done">
          <div className="bar" style={{ height: `${heightForDoneMonth}px` }}>
            <span className="bar-label_month">
              {donePercentageForMonth.toFixed(0)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BarChart;
