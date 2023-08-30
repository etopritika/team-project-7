import { object, string } from 'yup';

const feedbackFormSchema = object().shape({
  text: string().max(300, 'Review must be no more than 300 characters long'),
});

export default feedbackFormSchema;
