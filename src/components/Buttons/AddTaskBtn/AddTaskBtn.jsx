import css from './AddTaskBtn.module.css';
import icons from '../../../img/icons.svg';

export default function AddTaskBtn() {
  return (
    <>
      <button className={css.btn}>
        <svg className={css.btnIcon} width="24px" height="24px">
          <use href={icons + '#plus'}></use>
        </svg>
        Add task
      </button>
    </>
  );
}
