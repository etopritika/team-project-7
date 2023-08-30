// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import './DatePicker.module.css';

// import moment from 'moment';
// import React, { useCallback, useState } from 'react';
// import { useField } from 'formik';

// const today = new Date().toISOString().split('T')[0];

// const DatePickerComponent = ({ name = '', birthday }) => {
//   const [field, meta, helpers] = useField('date');
//   const { value } = meta;
//   const { setValue } = helpers;
//   const [currentMonth, setCurrentMonth] = useState(moment());

//   const isWeekend = useCallback(date => {
//     const day = moment(date).format('dddd');
//     return day === 'Saturday' || day === 'Sunday';
//   }, []);

//   const dayClassNames = useCallback(
//     date => {
//       const classNames = [];

//       const monthStart = moment(currentMonth).startOf('month');
//       const monthEnd = moment(currentMonth).endOf('month');

//       if (moment(date).isBefore(monthStart) || moment(date).isAfter(monthEnd)) {
//         classNames.push('outside-month');
//       }

//       if (isWeekend(date)) {
//         classNames.push('highlighted-weekend');
//       }

//       return classNames.join(' ');
//     },
//     [currentMonth, isWeekend]
//   );

//   const formatWeekDay = weekdayShort => weekdayShort.charAt(0);

//   const handleMonthChange = useCallback(date => {
//     setCurrentMonth(moment(date));
//   }, []);

//   const handleCloseDatePicker = useCallback(() => {
//     setCurrentMonth(value || new Date(birthday || today));
//   }, [value, birthday]);

//   return (
//     <DatePicker
//       className={isValid('birthday')}
//       id="birthday"
//       name="birthday"
//       views={['year', 'month', 'day']}
//       format="DD/MM/YYYY"
//       closeOnSelect={true}
//       disableFuture={true}
//       slotProps={{
//         popper: {
//           sx: PopperDateStyles,
//         },
//         textField: {
//           placeholder: user.birthday || `${currentDate}`,
//         },
//       }}
//       onChange={date => {
//         if (!date) setFieldValue('birthday', '');

//         setFieldValue('birthday', date);
//         setBirthdayDate(date);
//         setIsFormChanged(true);
//       }}
//       slots={{
//         openPickerIcon: KeyboardArrowDownIcon,
//       }}
//     />
//   );
// };

// export default DatePickerComponent;
