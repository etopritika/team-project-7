import { object, string } from 'yup';

const loginSchema = object().shape({
  email: string()
    .email('This is an ERROR email')
    .matches(/^[a-zA-Z0-9@.]+$/, 'Email must contain only Latin characters')
    .required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
});

export default loginSchema;
