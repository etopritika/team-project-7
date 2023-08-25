import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AuthSection from "./AuthSection/AuthSection"

export default function Layout() {
  return (
    <div style={{}}>
      <Suspense fallback={null}>
        <AuthSection/>
        <Outlet />
      </Suspense>
    </div>
  );
}
