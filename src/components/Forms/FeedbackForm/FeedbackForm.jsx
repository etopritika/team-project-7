import { FaStar } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { SlPencil } from 'react-icons/sl';
import { BiTrash } from 'react-icons/bi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './FeedbackForm.module.css';
import feedbackFormSchema from './feedbackFormValidation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  createOwnReview,
  deleteOwnReview,
  updateOwnReview,
} from 'redux/reviews/reviewsOperations';
import { useSelector } from 'react-redux';

export default function FeedbackForm({ toggleModal }) {
  const ownReview = useSelector(state => state.reviews.ownReview);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(ownReview.rating);
  const [hover, setHover] = useState(null);
  const [toggleEditSendBtn, setToggleEditSendBtn] = useState(false);

  const onSubmitReview = async values => {
    const reviewData = {
      rating: rating,
      text: values.text,
    };

    if (!ownReview.text) {
      try {
        const data = await dispatch(createOwnReview(reviewData));
        console.log(data);
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
    if (ownReview.text) {
      try {
        const data = await dispatch(updateOwnReview(reviewData));
        console.log(data);
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

  const handleDeleteBtn = () => {
    dispatch(deleteOwnReview());
    toggleModal();
  };

  const handleEditBtn = () => {
    setToggleEditSendBtn(prevState => !prevState);
  };

  return (
    <Formik
      initialValues={{
        text: ownReview.text,
      }}
      validationSchema={feedbackFormSchema}
      onSubmit={onSubmitReview}
    >
      {({ values, handleSubmit }) => (
        <Form className={styles.feedbackFormContainer}>
          <div>
            <button
              type="button"
              className={styles.feedbackFormCloseBtn}
              onClick={toggleModal}
            >
              <IoCloseOutline size={24} className={styles.close} />
            </button>
            <h3 className={styles.feedbackFormSubtitle}>Rating</h3>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;

              return (
                <label key={currentRating}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    className={styles.inputRadio}
                  />
                  <FaStar
                    size={24}
                    className={styles.feedbackFormStar}
                    color={
                      currentRating <= (hover || rating) ? '#FFAC33' : ''
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <div>
            <div className={styles.feedbackFormReviewBtnContainer}>
              <h3 className={styles.feedbackFormTopSubtitle}>Review</h3>
              <div className={styles.feedbackFormTopBtnContainer}>
                {values.text && (
                  <>
                    <button
                      type="button"
                      className={styles.feedbackFormEditBtn}
                      onClick={handleEditBtn}
                    >
                      <SlPencil size={16} />
                    </button>
                    <button
                      type="button"
                      className={styles.feedbackFormDeleteBtn}
                      onClick={handleDeleteBtn}
                    >
                      <BiTrash size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>

            <Field
              as="textarea"
              id="text"
              name="text"
              placeholder="Enter text"
              className={styles.feedbackFormInput}
            />
            <ErrorMessage
              name="text"
              component="div"
              className={styles.invalidFeedback}
            />
          </div>
          {!ownReview.text && (
            <div className={styles.feedbackFormBtnContainer}>
              <button
                type="submit"
                className={styles.feedbackFormSaveBtn}
                onClick={handleSubmit}
                disabled={!values.text}
              >
                Save
              </button>
              <button
                type="button"
                className={styles.feedbackFormCancelBtn}
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          )}
          {ownReview.text && toggleEditSendBtn && (
            <div className={styles.feedbackFormBtnContainer}>
              <button
                type="submit"
                className={styles.feedbackFormEditSendBtn}
                onClick={handleSubmit}
                disabled={!values.text}
              >
                Edit
              </button>
              <button
                type="button"
                className={styles.feedbackFormCancelBtn}
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
