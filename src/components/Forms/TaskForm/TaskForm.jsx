import { IoCloseOutline } from 'react-icons/io5';
// import { SlPencil } from 'react-icons/sl'; //будет нужна дальше - иконка карандаша
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './TaskForm.module.css';
import taskFormSchema from './taskFormValidation';

export default function TaskForm({ toggleModal }) {
  const onSubmitTask = values => {};

  return (
    <Formik
      initialValues={{}}
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
              <IoCloseOutline size={24} />
            </button>
            <h3 className={styles.taskFormSubtitle}>Title</h3>
            <Field
              type="text"
              id="task"
              name="task"
              placeholder="Enter text"
              className={styles.taskInput}
            />
            <ErrorMessage
              name="text"
              component="div"
              className={styles.invalidFeedback}
            />
          </div>
          <div className={styles.timeInputContainer}>
            <div>
              <h3 className={styles.taskFormSubtitle}>Start</h3>
              <Field
                type="time"
                id="end"
                name="end"
                className={styles.timeInput}
              />
            </div>
            <div>
              <h3 className={styles.taskFormSubtitle}>End</h3>
              <Field
                type="time"
                id="task"
                name="task"
                className={styles.timeInput}
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
              Low
            </label>
            <label className={styles.radioLabel}>
              <Field
                type="radio"
                name="priority"
                value="medium"
                className={styles.radioInput}
              />
              Medium
            </label>
            <label className={styles.radioLabel}>
              <Field
                type="radio"
                name="priority"
                value="high"
                className={styles.radioInput}
              />
              High
            </label>
          </div>
          <div className={styles.taskFormBtnContainer}>
            <button
              type="submit"
              className={styles.addBtn}
              onClick={handleSubmit}
              disabled={!values.task}
            >
              Add
            </button>
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
