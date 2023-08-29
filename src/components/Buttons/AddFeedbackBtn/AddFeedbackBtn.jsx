import React from 'react';
import styles from './AddFeedbackBtn.module.css';

export default function AddFeedbackBtn({ toggleModal }) {
  return (
    <button className={styles.feedbackBtn} type="button" onClick={toggleModal}>
      Feedback
    </button>
  );
}
