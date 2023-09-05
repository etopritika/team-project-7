import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { SlPencil } from 'react-icons/sl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './TaskForm.module.css';
import taskFormSchema from './taskFormValidation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from 'redux/tasks/taskOperations';

export default function TaskForm({ toggleModal, category, currentDate, task }) {
  const [title] = useState('');
  const [start] = useState('00:00');
  const [end] = useState('00:00');
  const [priority] = useState('low');
  const dispatch = useDispatch();

  const onSubmitTask = async values => {
    const taskData = {
      title: values.title,
      start: values.start,
      end: values.end,
      priority: values.priority,
      date: task ? task.date : currentDate,
      category: task ? task.category : category,
    };

    if (!task) {
      try {
        const data = await dispatch(addTask(taskData));
        if (!data.error) {
          toggleModal();
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (task) {
      try {
        const data = await dispatch(
          editTask({ taskId: task._id, updatedData: taskData })
        );
        if (!data.error) {
          console.log(data.payload);
          toggleModal();
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error(error);
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
