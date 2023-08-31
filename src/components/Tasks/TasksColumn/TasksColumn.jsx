import ColumnHeadBar from '../../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../../ColumnTasksList/ColumnTasksList';
import AddTaskBtn from '../../Buttons/AddTaskBtn/AddTaskBtn';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

export default function TasksColumn({ title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  return (
    <>
      <ColumnHeadBar title={title} />
      <ColumnTasksList />
      <AddTaskBtn toggleModal={toggleModal} />
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <div>Сюди треба розмістити таск-форм</div>
        </Modal>
      )}
    </>
  );
}
