import { startOfWeek, endOfWeek, eachDayOfInterval, format } from 'date-fns';
import { enGB } from 'date-fns/locale';

const getCustomDateArray = currentDate => {
  const startOfTheWeek = startOfWeek(currentDate, { locale: enGB });
  const endOfTheWeek = endOfWeek(currentDate, { locale: enGB });

  const dateInterval = eachDayOfInterval({
    start: startOfTheWeek,
    end: endOfTheWeek,
  });

  const formattedDates = dateInterval.map(date => ({
    url: format(date, 'ddMMMMyyyy', { locale: enGB }),
    tablet: format(date, 'E d', { locale: enGB }),
    desktop: format(date, 'EEEEE d', { locale: enGB }),
  }));

  return formattedDates;
};

export default getCustomDateArray;
