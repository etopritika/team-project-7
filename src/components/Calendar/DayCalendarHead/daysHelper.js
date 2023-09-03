import { startOfWeek, endOfWeek, eachDayOfInterval, format } from 'date-fns';
import { enGB } from 'date-fns/locale';

const getCustomDateArray = currentDate => {
  const startOfTheWeek = startOfWeek(currentDate, { locale: enGB });
  const endOfTheWeek = endOfWeek(currentDate, { locale: enGB });

  const dateInterval = eachDayOfInterval({
    start: startOfTheWeek,
    end: endOfTheWeek,
  });

  const formattedDatesTablet = dateInterval.map(date =>
    format(date, 'E d', { locale: enGB })
  );
  const formattedDatesMobile = dateInterval.map(date =>
    format(date, 'EEEEE d', { locale: enGB })
  );

  return { formattedDatesTablet, formattedDatesMobile };
};

export default getCustomDateArray;
