import css from './ColumnHeadBar.module.css';
import icons from '../../img/icons.svg';

export default function ColumnHeadBar({ title }) {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>{title}</p>
      <button className={css.btn}>
        <svg className={css.btnIcon} width="24px" height="24px">
          <use href={icons + '#plus-circle'}></use>
        </svg>
      </button>
    </div>
  );
}
