import TaskColumnCard from '../Tasks/TaskColumnCard/TaskColumnCard';

export default function ColumnTasksList({ tasks }) {
  return (
    <>
      {tasks.map(task => (
        <TaskColumnCard key={task._id} task={task} />
      ))}
    </>
  );
}
