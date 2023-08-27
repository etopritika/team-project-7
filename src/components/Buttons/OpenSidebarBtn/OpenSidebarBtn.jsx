import React from 'react';
import styles from './OpenSidebarBtn.module.css'; // Змінена шлях на .module.css




export default function OpenSidebarBtn  ({ openBurgerMenu }) {
  const openSidebar = () => {
    openBurgerMenu();
    document.body.style.overflow = 'hidden';
  };

  return (
    <button
      className={styles.buttonOpen}
      type="button"
      onClick={openSidebar}
      >
          burgermenu
    </button>
  );
};
