import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthSection from '../AuthSection/AuthSection';
// import useAuth from 'hooks';

export default function SideBar() {
    // const { isLoggedIn } = useAuth();
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthSection />}
    </>
  );
}
