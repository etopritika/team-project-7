import { useParams } from 'react-router-dom';

import TasksColumn from '../TasksColumn/TasksColumn';

import css from './TasksColumnList.module.css';

function formatDate(date) {
  const dateParts = date.match(/(\d{2})([A-Za-z]+)(\d{4})/);
  if (!dateParts) return date;

  const day = dateParts[1];
  const month = dateParts[2];
  const year = dateParts[3];

  const monthMap = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12',
  };

  return `${year}-${monthMap[month]}-${day}`;
}

export default function TasksColumnList({ tasks }) {
  const { current } = useParams();
  const newCurrentDay = formatDate(current);

  const filteredTasks = tasks.filter(task => task.date === newCurrentDay);

  console.log(newCurrentDay);

  return (
    <>
      <ul className={css.list}>
        <li className={css.listItem}>
          <TasksColumn
            date={newCurrentDay}
            title={'To do'}
            category={'to-do'}
            tasks={filteredTasks.filter(task => task.category === 'to-do')}
          />
        </li>
        <li className={css.listItem}>
          <TasksColumn
            date={newCurrentDay}
            title={'In progress'}
            category={'in-progress'}
            tasks={filteredTasks.filter(
              task => task.category === 'in-progress'
            )}
          />
        </li>
        <li className={css.listItem}>
          <TasksColumn
            date={newCurrentDay}
            title={'Done'}
            category={'done'}
            tasks={filteredTasks.filter(task => task.category === 'done')}
          />
        </li>
      </ul>
    </>
  );
}
