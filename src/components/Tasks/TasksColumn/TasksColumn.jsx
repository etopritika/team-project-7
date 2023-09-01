import ColumnHeadBar from '../../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../../ColumnTasksList/ColumnTasksList';
import AddTaskBtn from '../../Buttons/AddTaskBtn/AddTaskBtn';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

export default function TasksColumn({ title, tasks }) {
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
          <div>Сюди треба розмістити таск-форм</div>
        </Modal>
      )}
    </>
  );
}
