import css from "./AuthBtn.module.css"

export default function AuthBtn({title, icon}) {
  return (
    <button className={css.button} type="submit">
      {title}
      <svg className={css.icon}>
        <use href={icon} />
      </svg>
    </button>
  );
}
