import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  CalendarToolbar  from '../components/Calendar/CalendarToolbar/CalendarToolbar';


export default function CalendarPage() {
  
  return (
    <div >
      <CalendarToolbar/> 
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};


