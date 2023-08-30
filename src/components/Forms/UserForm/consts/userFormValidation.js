import { object, string, date } from 'yup';

export const userFormValidation = object({
  name: string().max(40, 'too long!').required(),
  birthday: date(),
  email: string()
    .matches(/^([a-z0-9_.-]+)@([a-z09_.-]+).([a-z]{2,6})$/, 'enter valid email')
    .required(),
  skype: string().max(30),
  phone: string().matches(/^\+[\d-]+$/, 'number should start from +'),
});
