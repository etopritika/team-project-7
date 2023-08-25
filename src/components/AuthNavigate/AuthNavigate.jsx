import css from './AuthNavigate.module.css';
import { NavLink } from 'react-router-dom';
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

export default function AuthNavigate({ formType }) {
  const fillRout = formType === 'register' ? LoginPage : RegisterPage;
  const fillContent = formType === 'register' ? 'Log In' : 'Sign up';

  return (
    <div className={css.navlink}>
      <NavLink to={fillRout}>{fillContent}</NavLink>
    </div>
  );
}
