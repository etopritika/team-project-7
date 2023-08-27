import { NavLink } from 'react-router-dom';

import css from './AuthSection.module.css';
import logo from '../../img/goose.png';
import icons from '../../img/icons.svg';

export default function AuthSection() {
  return (
    <header className={css.authSection}>
      <img src={logo} alt="logo" className={css.logo} />

      <h1 className={css.heroTitle}>
        G<span className={css.heroTitleSpan}>oo</span>seTrack
      </h1>

      <div className={css.authNav}>
        <NavLink to="/login" className={css.linkLogin}>
          Log in
          <svg className={css.iconLogin} width="18px" height="18px">
            <use href={icons + '#log-in-01'}></use>
          </svg>
        </NavLink>

        <NavLink to="/register" className={css.linkRegister}>
          Sign up
        </NavLink>
      </div>
    </header>
  );
}
