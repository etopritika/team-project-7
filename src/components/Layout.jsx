import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import SideBar from './SideBar/SideBar';

export default function Layout(){
  return (
    <div style={{ }}>
      <Suspense fallback={null}>
        <SideBar/>
        <Outlet />
      </Suspense>
    </div>
  );
};