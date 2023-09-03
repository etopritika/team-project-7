// import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from "../components/Spinner/Spinner";

export default function StatisticsPage() {
  return (
    <div>
      <Suspense fallback={<Spinner/>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
