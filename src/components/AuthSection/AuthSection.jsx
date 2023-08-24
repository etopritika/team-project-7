import { NavLink } from 'react-router-dom';

export default function AuthSection() {
  return (
    <div>
      <NavLink to="/register">
        Register
      </NavLink>

      <NavLink to="/login">
        Log In
      </NavLink>
    </div>
  );
};