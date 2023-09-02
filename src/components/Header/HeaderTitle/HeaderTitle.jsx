import React from 'react';
import styles from './HeaderTitle.module.css';

function HeaderTitle({ currentPage }) {
  let pageTitle = 'Current Title';

  if (currentPage.includes('account')) {
    pageTitle = 'Account';
  } else if (currentPage.includes('calendar')) {
    pageTitle = 'Calendar';
  } else if (currentPage.includes('statistics')) {
    pageTitle = 'Statistics';
  }

  return (
    <div>
      <h1 className={styles.headerTitle}>{pageTitle}</h1>
    </div>
  );
}

export default HeaderTitle;
