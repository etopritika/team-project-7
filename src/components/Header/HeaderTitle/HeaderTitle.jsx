import React from 'react';
import styles from './HeaderTitle.module.css';

function HeaderTitle({ currentPage }) {
  let pageTitle = 'Current Title';

  switch (currentPage) {
    case 'account':
      pageTitle = 'Account';
      break;
    case 'calendar':
      pageTitle = 'Calendar';
      break;
    case 'statistics':
      pageTitle = 'Statistics';
      break;
    default:
      break;
  }

  return (
    <div>
      <h1 className={styles.headerTitle}>{pageTitle}</h1>
    </div>
  );
}

export default HeaderTitle;