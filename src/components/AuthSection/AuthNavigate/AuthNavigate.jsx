import css from './AuthNavigate.module.css';

export default function AuthNavigate({ formType }) {
  const fillRout = formType === 'register' ? loginPage : RegisterPage;
  const fillContent = formType === 'register' ? 'Log In' : 'Sign up';

  return (
    <div className={css.navlink}>
      <div to={fillRout}>{fillContent}</div>
    </div>
  );
}
