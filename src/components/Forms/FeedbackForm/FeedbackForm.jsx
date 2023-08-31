import { FaStar } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { SlPencil } from 'react-icons/sl';
import { BiTrash } from 'react-icons/bi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './FeedbackForm.module.css';
import feedbackFormSchema from './feedbackFormValidation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createOwnReview } from 'redux/reviews/reviewsOperations';
import { useSelector } from 'react-redux';

export default function FeedbackForm({ toggleModal }) {
  const ownReview = useSelector(state => state.reviews.ownReview);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(ownReview.rating);
  const [hover, setHover] = useState(null);

  const onSubmitReview = async values => {
    const reviewData = {
      rating: rating,
      text: values.text,
    };

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
              <IoCloseOutline size={24} color="#111111" />
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
                  />
                  <FaStar
                    size={24}
                    className={styles.feedbackFormStar}
                    color={
                      currentRating <= (hover || rating) ? '#FFAC33' : '#CEC9C1'
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
                    >
                      <SlPencil size={16} color="#3E85F3" />
                    </button>
                    <button
                      type="button"
                      className={styles.feedbackFormDeleteBtn}
                    >
                      <BiTrash size={16} color="#EA3D65" />
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
        </Form>
      )}
    </Formik>
  );
}
