import { object, string } from 'yup';

const registerSchema = object().shape({
  name: string()
    .min(3, 'Too Short!')
    .max(36, 'Too Long!')
    .required('Required!'),
  email: string().email('This is an ERROR email').required('Required!'),
  password: string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required('Required!'),
});

export default registerSchema;
