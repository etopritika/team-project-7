import {
  startOfMonth,
  endOfMonth,
  subDays,
  addDays,
  eachDayOfInterval,
  format,
} from 'date-fns';

const getCustomDateArray = () => {
  const currentDate = new Date();
  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);

  const last6DaysOfPreviousMonth = subDays(startOfCurrentMonth, 6);
  const first6DaysOfNextMonth = addDays(endOfCurrentMonth, 6);

  const dateInterval = eachDayOfInterval({
    start: last6DaysOfPreviousMonth,
    end: first6DaysOfNextMonth,
  });

  // Форматуємо кожну дату
  const formattedDatesTablet = dateInterval.map(date => format(date, 'E d'));
  const formattedDatesMobile = dateInterval.map(date =>
    format(date, 'EEEEE d')
  );

  return { formattedDatesTablet, formattedDatesMobile };
};

export default getCustomDateArray;
