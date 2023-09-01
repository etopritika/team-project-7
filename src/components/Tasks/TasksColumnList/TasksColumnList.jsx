import { useParams } from 'react-router-dom';

import TasksColumn from '../TasksColumn/TasksColumn';

import css from './TasksColumnList.module.css';

function formatDate(date) {
  const dateParts = date.match(/(\d{2})([A-Za-z]{3})(\d{4})/);
  if (!dateParts) return date;

  const day = dateParts[1];
  const month = dateParts[2];
  const year = dateParts[3];

  const monthMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  return `${year}-${monthMap[month]}-${day}`;
}

export default function TasksColumnList({ tasks }) {
  const { current } = useParams();
  const newCurrent = formatDate(current);

  const filteredTasks = tasks.filter(task => task.date === newCurrent);

  console.log(newCurrent);

  return (
    <>
      <ul className={css.list}>
        <li className={css.listItem}>
          <TasksColumn
            title={'To do'}
            tasks={filteredTasks.filter(task => task.category === 'to-do')}
          />
        </li>
        <li className={css.listItem}>
          <TasksColumn
            title={'In progress'}
            tasks={filteredTasks.filter(
              task => task.category === 'in-progress'
            )}
          />
        </li>
        <li className={css.listItem}>
          <TasksColumn
            title={'Done'}
            tasks={filteredTasks.filter(task => task.category === 'done')}
          />
        </li>
      </ul>
    </>
  );
}
