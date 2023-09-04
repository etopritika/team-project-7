import { NavLink } from 'react-router-dom';

import css from './AuthSection.module.css';
import logo from '../../img/goose.png';
// import icons from '../../img/icons.svg';

import { FiLogIn } from 'react-icons/fi';

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
          <FiLogIn size={18} />
        </NavLink>

        <NavLink to="/register" className={css.linkRegister}>
          Sign up
        </NavLink>
      </div>
    </header>
  );
}
