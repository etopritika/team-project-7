import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
// import { SlPencil } from 'react-icons/sl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './TaskForm.module.css';
// import taskFormSchema from './taskFormValidation';
// import { useParams } from 'react-router-dom';
// import { addTask, editTask } from 'redux/tasks/taskOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/taskOperations';

export default function TaskForm({
  toggleModal,
  category,
  currentDate,
  action,
  column,
  taskToEdit,
}) {
  const [title, /*setTitle*/] = useState('');
  const [start, /*setStart*/] = useState('');
  const [end, /*setEnd*/] = useState('');
  const [priority, /*setPriority*/] = useState('low');
  const dispatch = useDispatch();
  // let id, title, start, end, priority, date;

  // if (typeof taskToEdit === 'object' && taskToEdit !== null && true) {
  //   ({ _id: id, title, start, end, priority, date } = taskToEdit);
  // }

  // const { currentDate } = useParams();

  // const handleSubmit = (values, actions) => {
  //   if (action === 'add') {
  //     addTask(values);
  //   }

  console.log(setTitle);
  console.log(setStart);
  console.log(setEnd);
  console.log(setPriority);

  const onSubmitTask = async values => {
    const newTask = {
      title: values.title,
      start: values.start,
      end: values.end,
      priority: values.priority,
      date: currentDate,
      category,
    };

    console.log(newTask);

    const data = await dispatch(addTask(newTask));
    console.log(data);
    toggleModal();
  };

  //   if (action === 'edit') {
  //     editTask({ id, ...values });
  //   }

  //   action.resetForm();
  //   toggleModal();
  // };

  // const setCategory = () => {
  //   if (column === 'To do') return 'to-do';
  //   if (column === 'In progress') return 'in-progress';
  //   if (column === 'Done') return 'done';
  // };

  return (
    <Formik
      initialValues={{
        title,
        start,
        end,
        priority,
        // title: (action === 'edit' && title) || '',
        // start: (action === 'edit' && start) || '09:00',
        // end: (action === 'edit' && end) || '10:00',
        // priority: (action === 'edit' && priority) || 'low',
        // date: (action === 'edit' && date) || currentDate,
        // category: setCategory(),
      }}
      // validationSchema={taskFormSchema}
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
              {/* <span className={styles.radioSpan}></span> */}
              Low
            </label>
            <label className={styles.radioLabel}>
              <Field
                type="radio"
                name="priority"
                value="medium"
                className={styles.radioInput}
              />
              {/* <span className={styles.radioSpan}></span> */}
              Medium
            </label>
            <label className={styles.radioLabel}>
              <Field
                type="radio"
                name="priority"
                value="high"
                className={styles.radioInput}
              />
              {/* <span className={styles.radioSpan}></span> */}
              High
            </label>
          </div>
          <div className={styles.taskFormBtnContainer}>
            <button
              type="submit"
              className={styles.addBtn}
              onClick={handleSubmit}
              disabled={!values.title}
            >
              <AiOutlinePlus className={styles.btnIcon} />
              Add
            </button>
            {/* <button
              type="submit"
              className={styles.addBtn}
              onClick={handleSubmit}
            >
              <SlPencil className={styles.btnIcon} />
              Edit
            </button> */}

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
