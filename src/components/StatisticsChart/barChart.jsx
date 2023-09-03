import React from 'react';

import './barChart.css';

const BarChart = ({ events, selectedDate, updateEvent }) => {
  const todoForMonth = events.filter(event => event.status === 'todo');
  const inProgressForMonth = events.filter(
    event => event.status === 'in progress'
  );
  const doneForMonth = events.filter(event => event.status === 'done');

  const totalTasksForMonth =
    todoForMonth.length + inProgressForMonth.length + doneForMonth.length;

  const todoByDay = events.filter(
    event =>
      event.date.toDateString() === selectedDate.toDateString() &&
      event.status === 'todo'
  ).length;
  const inProgressByDay = events.filter(
    event =>
      event.date.toDateString() === selectedDate.toDateString() &&
      event.status === 'in progress'
  ).length;
  const doneByDay = events.filter(
    event =>
      event.date.toDateString() === selectedDate.toDateString() &&
      event.status === 'done'
  ).length;

  const allTasksByDay = todoByDay + inProgressByDay + doneByDay;

  const todoPercentageForDay =
    allTasksByDay > 0 ? (todoByDay / allTasksByDay) * 100 : 0;
  const inProgressPercentageForDay =
    allTasksByDay > 0 ? (inProgressByDay / allTasksByDay) * 100 : 0;
  const donePercentageForDay =
    allTasksByDay > 0 ? (doneByDay / allTasksByDay) * 100 : 0;

  const todoPercentageForMonth =
    (todoForMonth.length / totalTasksForMonth) * 100 || 0;
  const inProgressPercentageForMonth =
    (inProgressForMonth.length / totalTasksForMonth) * 100 || 0;
  const donePercentageForMonth =
    (doneForMonth.length / totalTasksForMonth) * 100 || 0;

  const maxHeight = 268;
  const heightForTodoDay = (maxHeight * todoPercentageForDay) / 100;
  const heightForInProgressDay = (maxHeight * inProgressPercentageForDay) / 100;
  const heightForDoneDay = (maxHeight * donePercentageForDay) / 100;

  const heightForTodoMonth = (maxHeight * todoPercentageForMonth) / 100;
  const heightForInProgressMonth =
    (maxHeight * inProgressPercentageForMonth) / 100;
  const heightForDoneMonth = (maxHeight * donePercentageForMonth) / 100;

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
              {todoPercentageForDay.toFixed(2)}%
            </span>
          </div>
        </div>

        <span className="nameBar">To Do</span>
        <div className="chart">
          <div className="bar" style={{ height: `${heightForTodoMonth}px` }}>
            <span className="bar-label_month">
              {todoPercentageForMonth.toFixed(2)}%
            </span>
          </div>
        </div>

        <div className="chart_in_progres">
          <div
            className="bar_day"
            style={{ height: `${heightForInProgressDay}px` }}
          >
            <span className="bar-label_inProgresDay">
              {inProgressPercentageForDay.toFixed(2)}%
            </span>
          </div>
        </div>
        <span className="nameBar_progress">In Progress</span>

        <div className="chart">
          <div
            className="bar"
            style={{ height: `${heightForInProgressMonth}px` }}
          >
            <span className="bar-label_inProgres">
              {inProgressPercentageForMonth.toFixed(2)}%
            </span>
          </div>
        </div>

        <div className="chart_done">
          <div className="bar_day" style={{ height: `${heightForDoneDay}px` }}>
            <span className="bar-label_todo">
              {donePercentageForDay.toFixed(2)}%
            </span>
          </div>
        </div>
        <span className="nameBar_done">Done</span>
        <div className="chart">
          <div className="bar" style={{ height: `${heightForDoneMonth}px` }}>
            <span className="bar-label_month">
              {donePercentageForMonth.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BarChart;
