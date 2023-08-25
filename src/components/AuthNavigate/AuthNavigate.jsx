import css from './AuthNavigate.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNavigate({ formType }) {
  const fillRout = formType === 'register' ? LoginPage : RegisterPage;
  const fillContent = formType === 'register' ? 'Log In' : 'Sign up';

  return (
    <div className={css.navlink}>
      <NavLink to={fillRout}>{fillContent}</NavLink>
    </div>
  );
}
