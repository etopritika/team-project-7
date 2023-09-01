import { UserForm } from '../../components/Forms/UserForm/UserForm';
// import { Helmet } from 'react-helmet-async';
import css from "./AccountPage.module.css"

export default function AccountPage() {
  return (
    <main className={css.container}>
      <UserForm />
    </main>
  );
}
