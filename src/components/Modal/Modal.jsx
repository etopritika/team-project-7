import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  return createPortal(
    <div>
      <div>{this.props.children}</div>
    </div>,
    modalRoot
  );
};
