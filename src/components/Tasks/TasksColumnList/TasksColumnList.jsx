import TasksColumn from '../TasksColumn/TasksColumn';

import css from './TasksColumnList.module.css';

export default function TasksColumnList() {
  return (
    <>
      <ul className={css.list}>
        <li className={css.listItem}>
          <TasksColumn title={'To do'} />
        </li>
        <li className={css.listItem}>
          <TasksColumn title={'In progress'} />
        </li>
        <li className={css.listItem}>
          <TasksColumn title={'Done'} />
        </li>
      </ul>
    </>
  );
}
