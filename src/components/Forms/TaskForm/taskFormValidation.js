import { object, string } from 'yup';

const taskFormSchema = object().shape({
  text: string().max(300, 'Review must be no more than 300 characters long'), //написать свою валидацию!!!
});

export default taskFormSchema;
