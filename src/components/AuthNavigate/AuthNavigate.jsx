import css from './AuthNavigate.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNavigate({ formType }) {
  const fillRout = formType === 'register' ? '/login' : '/register';
  const fillContent = formType === 'register' ? 'Log In' : 'Sign up';

  return (
    <NavLink className={css.navlink} to={fillRout}>
      {fillContent}
    </NavLink>
  );
}
