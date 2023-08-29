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


// MODAL////////////////////////////////////////////////////////////////////

// в index.html <div id='modal-root'><div/>

// import { createPortal } from 'react'

// const modalRoot = document.querySelector('#modal-root');

// export default Modal  {

// toggleModal = () => {
//   setState(({ showModal }) => ({
    
//     showModal: !showModal,
//   }));
// }

// componentDidMount() {
//   window.addEventListener('keydawn', evt => {

//     if (evt.code === "Escape") {
      
//     }
//   })
// }
  
//   return createPortal(

  
//     <div className='Modal__bacdrop'>
//       <div className='Modal__content'>
//       {Children}
//       </div>
//     </div>
//   )
// }
