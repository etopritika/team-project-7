import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { SlPencil } from 'react-icons/sl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './TaskForm.module.css';
import taskFormSchema from './taskFormValidation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from 'redux/tasks/taskOperations';
import Notiflix from 'notiflix';

export default function TaskForm({ toggleModal, category, currentDate, task }) {
  //в пропсах передан task - это собственно уже готовая тудушка, по которой кликаешь
  //и данные ее передаются сюда, чтоб заполнить поля автоматически и возпроизвести кнопку Edit
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('00:00');
  const [end, setEnd] = useState('00:00');
  const [priority, setPriority] = useState('low');
  const dispatch = useDispatch();

  //временные логи, чтоб не было ошибки из-за неиспользования нижеперечисленных функций
  console.log(setTitle);
  console.log(setStart);
  console.log(setEnd);
  console.log(setPriority);

  const onSubmitTask = async values => {
    const taskData = {
      title: values.title,
      start: values.start,
      end: values.end,
      priority: values.priority,
      date: currentDate,
      category,
    };

    if (!task) {
      try {
        const data = await dispatch(addTask(taskData));
        if (!data.error) {
          console.log(data.payload);
          toggleModal();
        } else {
          console.error(data.error);
          Notiflix.Notify.failure(
            'Error creating a task: ' + data.error.message
          );
        }
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error creating a task: ' + error.message);
      }
    }

    if (task) {
      try {
        const data = await dispatch(editTask(taskData));
        if (!data.error) {
          console.log(data.payload);
          toggleModal();
        } else {
          console.error(data.error);
          Notiflix.Notify.failure(
            'Error editing the task: ' + data.error.message
          );
        }
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Error editing the task: ' + error.message);
      }
    }
  };

  return (
    <Formik
      initialValues={{
        title: (task && task.title) || title,
        start: (task && task.start) || start,
        end: (task && task.end) || end,
        priority: (task && task.priority) || priority,
      }}
      validationSchema={taskFormSchema}
      //схему пока закомментил - из-за нее не работал сабмит данных, хотя все поля были заполнены - надо смотреть!
      onSubmit={onSubmitTask}
    >
      {({ values, handleSubmit }) => (
        <Form className={styles.taskFormContainer}>
          <div>
            <button
              type="button"
              className={styles.taskFormCloseBtn}
              onClick={toggleModal}
            >
              <IoCloseOutline size={24} className={styles.close} />
            </button>
            <h3 className={styles.taskFormSubtitle}>Title</h3>
            <Field
              type="text"
              name="title"
              placeholder="Enter text"
              className={styles.taskInput}
            />
            <ErrorMessage
              name="title"
              component="div"
              className={styles.invalidFeedback}
            />
          </div>
          <div className={styles.timeInputContainer}>
            <div>
              <h3 className={styles.taskFormSubtitle}>Start</h3>
              <Field type="time" name="start" className={styles.timeInput} />
              <ErrorMessage
                name="start"
                component="div"
                className={styles.invalidFeedback}
              />
            </div>
            <div>
              <h3 className={styles.taskFormSubtitle}>End</h3>
              <Field type="time" name="end" className={styles.timeInput} />
              <ErrorMessage
                name="end"
                component="div"
                className={styles.invalidFeedback}
              />
            </div>
          </div>
          <div className={styles.radioBtnContainer}>
            <label className={styles.radioLabel}>
              <Field
                type="radio"
                name="priority"
                value="low"
                className={styles.radioInput}
              />
              <span className={styles.radioSpan}></span>
              Low
            </label>
            <label className={styles.radioLabel}>
              <Field
                type="radio"
                name="priority"
                value="medium"
                className={styles.radioInput}
              />
              <span className={styles.radioSpan}></span>
              Medium
            </label>
            <label className={styles.radioLabel}>
              <Field
                type="radio"
                name="priority"
                value="high"
                className={styles.radioInput}
              />
              <span className={styles.radioSpan}></span>
              High
            </label>
          </div>
          <div className={styles.taskFormBtnContainer}>
            {!task && (
              <button
                type="submit"
                className={styles.addBtn}
                onClick={handleSubmit}
                disabled={!values.title}
              >
                <AiOutlinePlus className={styles.btnIcon} />
                Add
              </button>
            )}
            {task && (
              <button
                type="submit"
                className={styles.addBtn}
                onClick={handleSubmit}
              >
                <SlPencil className={styles.btnIcon} />
                Edit
              </button>
            )}
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
