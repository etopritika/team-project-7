import TaskColumnCard from '../Tasks/TaskColumnCard/TaskColumnCard';
import css from './ColumnTasksList.module.css';

export default function ColumnTasksList({ tasks }) {
  return (
    <>
      <ul className={css.list}>
        {tasks &&
          tasks.map(task => (
            <li key={task._id}>
              <TaskColumnCard task={task} />
            </li>
          ))}
      </ul>
    </>
  );
}
