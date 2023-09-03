import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  CalendarToolbar  from '../../components/Calendar/CalendarToolbar/CalendarToolbar';
import Spinner from "../../components/Spinner/Spinner";


export default function CalendarPage() {
  
  return (
    <div >
      <CalendarToolbar/> 
      <Suspense fallback={<Spinner/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};


