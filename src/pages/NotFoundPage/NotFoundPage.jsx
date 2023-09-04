import css from './NotFoundPage.module.css';
import BackToHomeBtn from "../../components/Buttons/BackToHomeBtn/BackToHomeBtn";
import { useTheme } from 'hooks/useTheme';


export default function NotFoundPage() {


 useTheme();


  return (
    <main className={css.container}>
      <div className={css.not__found__container}>
        <span>4</span>
        <div className={css.image}></div>
        <span>4</span>
      </div>
      <p className={css.text}>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <BackToHomeBtn  />
    </main>
  );
}
