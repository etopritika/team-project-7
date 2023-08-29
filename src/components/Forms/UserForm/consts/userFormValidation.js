import * as Yup from 'yup';

export const userFormValidation = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(36, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(
    /^\+380\d{9}$/,
    'Phone number must be in the format +380XXXXXXXXX'
  ),
  telegram: Yup.string().matches(
    /^[a-zA-Z0-9_@]*$/,
    'value contains only latin letters, numbers, underscore and "@" symbol'
  ),
  avatar: Yup.string('Invalid avatar'),
  birthday: Yup.date(),
});
