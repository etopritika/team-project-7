import { useNavigate } from 'react-router-dom';
import css from './BackToHomeBtn.module.css';

export default function BackToHomeBtn() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/user/account');
  };

  return (
    <button className={css.button} onClick={handleClick} type="button">
      Back to home
    </button>
  );
}
