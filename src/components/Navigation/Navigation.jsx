import NavLink from 'react-router-dom';
// import { useAuth } from 'hooks';

export default function Navigation() {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      {/* {isLoggedIn && (
        <NavLink to="/user">
          User
        </NavLink>
      )} */}
    </nav>
  );
}
