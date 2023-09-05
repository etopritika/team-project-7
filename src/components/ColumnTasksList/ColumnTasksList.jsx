import TaskColumnCard from '../Tasks/TaskColumnCard/TaskColumnCard';

import css from './ColumnTasksList.module.css';

import 'simplebar-react/dist/simplebar.min.css';
import { Scrollbar } from './VerticalScroll.styled';

export default function ColumnTasksList({ tasks }) {
  return (
    <>
      <Scrollbar autoHide={false}>
        <ul className={css.list}>
          {tasks &&
            tasks.map(task => (
              <li key={task._id}>
                <TaskColumnCard task={task} />
              </li>
            ))}
        </ul>
      </Scrollbar>
    </>
  );
}
