import React, { useState, useEffect } from 'react';
import styles from './HeaderTitle.module.css';
import gloryToTheMentor from '../../../img/glory_to_the_mentor.png';
import { fetchTasks } from 'redux/tasks/taskOperations';

function HeaderTitle({ currentPage }) {
  const [gooseActive, setGooseActive] = useState(false);

  useEffect(() => {
    if (currentPage.includes('calendar/day') && fetchTasks.length > 0) {
      setGooseActive(true);
    } else {
      setGooseActive(false);
    }
  }, [currentPage]);

  let pageTitle = 'Current Title';
  if (currentPage.includes('account')) {
    pageTitle = 'Account';
  } else if (currentPage.includes('calendar')) {
    pageTitle = 'Calendar';
  } else if (currentPage.includes('statistics')) {
    pageTitle = 'Statistics';
  }

  return pageTitle === 'Calendar' ? (
    <div className={styles.container}>
      {gooseActive && (
        <img
          src={gloryToTheMentor}
          alt="Слава ментору"
          className={styles.image}
          width="64"
          height="60"
        />
      )}

      <div className={styles.text_container}>
        <h1 className={styles.headerTitle}>{pageTitle}</h1>
        {gooseActive && (
          <p className={styles.text}>
            <span className={styles.textLetgo}>Let go</span> of the past and
            focus on the present!
          </p>
        )}
      </div>
    </div>
  ) : (
    <div>
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default HeaderTitle;
