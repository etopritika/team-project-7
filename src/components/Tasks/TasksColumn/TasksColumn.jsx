import ColumnHeadBar from '../../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../../ColumnTasksList/ColumnTasksList';
import AddTaskBtn from '../../Buttons/AddTaskBtn/AddTaskBtn';

export default function TasksColumn({ title }) {
  return (
    <>
      <ColumnHeadBar title={title} />
      <ColumnTasksList />
      <AddTaskBtn />
    </>
  );
}
