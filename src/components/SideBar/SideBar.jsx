import AuthNavigate from '../AuthNavigate/AuthNavigate';
import AuthSection from '../AuthSection/AuthSection';
// import useAuth from 'hooks';

export default function SideBar() {
    // const { isLoggedIn } = useAuth();
        const isLoggedIn = false; //Тимчасово
  return (
    <>
      <AuthNavigate />
      {isLoggedIn ? <div>User Menu</div> : <AuthSection />}
    </>
  );
}
