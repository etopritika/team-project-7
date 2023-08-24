import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Layout(){
  return (
    <div style={{ }}>
      <Suspense fallback={null}>
        <div>Layout</div>
        <Outlet />
      </Suspense>
    </div>
  );
};