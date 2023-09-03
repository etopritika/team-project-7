import ColumnHeadBar from '../../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../../ColumnTasksList/ColumnTasksList';
import AddTaskBtn from '../../Buttons/AddTaskBtn/AddTaskBtn';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';

export default function TasksColumn({ title, category, tasks, date }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  return (
    <>
      <ColumnHeadBar title={title} toggleModal={toggleModal} />
      <ColumnTasksList tasks={tasks} />
      <AddTaskBtn toggleModal={toggleModal} />
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <TaskForm
            toggleModal={toggleModal}
            category={category}
            currentDate={date}
          />
        </Modal>
      )}
    </>
  );
}
