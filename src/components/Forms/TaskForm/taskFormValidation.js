import * as Yup from 'yup';
import { parse } from 'date-fns';

const taskFormSchema = Yup.object().shape({
  title: Yup.string()
    .max(250, 'Title is too long')
    .required('Title is required'),
  start: Yup.string().required('Start time is required'),
  end: Yup.string()
    .required('End time is required')
    .test(
      'is-greater',
      'End time should be greater than start time',
      function (value) {
        const { start } = this.parent;
        if (start && value) {
          const startTime = parse(start, 'HH:mm', new Date());
          const endTime = parse(value, 'HH:mm', new Date());
          return endTime > startTime;
        }
        return true;
      }
    ),
  priority: Yup.string()
    .oneOf(['low', 'medium', 'high'])
    .required('Priority is required'),
  // date: Yup.date()
  //   .required('Date is required')
  //   .transform((value, originalValue) => {
  //     if (originalValue) {
  //       return parse(originalValue, 'yyyy-MM-dd', new Date());
  //     }
  //     return value;
  //   }),
  // category: Yup.string()
  //   .oneOf(['to-do', 'in-progress', 'done'])
  //   .required('Category is required'),
});

export default taskFormSchema;
