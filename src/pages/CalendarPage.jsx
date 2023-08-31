// import { format } from 'date-fns';
import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  CalendarToolbar  from '../components/Calendar/CalendarToolbar/CalendarToolbar';
// import { useDate } from 'hooks/useDate';

export default function CalendarPage() {
  
  const [isActivePage, setIsActivePage] = useState(false);
  // const navigate = useNavigate();
  // const urlDate = useDate();
  // const location = useLocation();
  // const formattedCurrentDate = format(urlDate, 'MMMMu');

  // useEffect(() => {
  //   if (location.pathname.includes('calendar')) {
  //     navigate(`month/${formattedCurrentDate}`);
  //     return;
  //   }
  // }, [formattedCurrentDate, navigate, location.pathname]);

  const doActiveDate = () => {
    setIsActivePage(false);
  };
  const doActiveMonth = () => {
    
    setIsActivePage(true);
    };


  return (
    <div >
      <CalendarToolbar
        isActivePage={isActivePage}
        doActiveMonth={doActiveMonth}
        doActiveDate={doActiveDate}
      /> 
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};


