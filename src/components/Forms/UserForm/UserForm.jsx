import React, { useState } from 'react';
import Notiflix from 'notiflix';
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import { editData } from '../../../redux/auth/authOperations';
import { format } from 'date-fns';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userFormValidation } from './consts/userFormValidation';
import icons from '../../../img/icons.svg';
import css from './UserForm.module.css';
import SaveChangesBtn from '../../Buttons/SaveChangesBtn/SaveChangesBtn';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';

const userInfoKeys = [
  'name',
  'email',
  'birthday',
  'phone',
  'telegram',
  'avatarURL',
];

export function UserForm() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);

  const [isFormChanged, setIsFormChanged] = useState(false);
  const [file, setFile] = useState(null);

  const initialUserInfo = {
    phone: userInfo.phone || '',
    telegram: userInfo.telegram || '',
    name: userInfo.name,
    email: userInfo.email,
    birthday: userInfo.birthday ? new Date(userInfo.birthday) : new Date(),
    avatarURL: userInfo.avatar || null,
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    userInfoKeys.forEach(key => {
      if (!values[key]) {
        return;
      }
      if (key === 'birthday') {
        const birthday = format(values[key], 'yyyy-MM-dd');
        formData.append('birthday', birthday);
        return;
      }
      formData.append(key, values[key]);
    });
    if (file) {
      formData.append('avatar', file);
    }
    try {
      dispatch(editData(formData));
    } catch (error) {}
    resetForm();
  };

  return (
    <section className={css.user}>
      <Formik
        initialValues={initialUserInfo}
        validationSchema={userFormValidation}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ errors, touched, values, dirty, setFieldValue, setTouched }) => {
          return (
            <Form>
              <div className={css.user__avatar_container}>
                <div className={css.user__avatar}>
                  {userInfo.avatarURL ? (
                    <img
                      src={
                        typeof userInfo.avatarURL === 'string'
                          ? userInfo.avatarURL
                          : URL.createObjectURL(userInfo.avatar)
                      }
                      alt="avatar"
                      className={css.circularAvatar}
                    />
                  ) : (
                    <svg>
                      <use href={icons + '#ph-user'}></use>
                    </svg>
                  )}
                  <div className={css.avatar_upload_container}>
                    <Field
                      id="avatar-upload"
                      name="avatar"
                      type="file"
                      accept="image/*,.png,.jpg,.gif"
                      onChange={async e => {
                        const file = e.target.files[0];
                        if (file) {
                          const maxSizeInBytes = 600 * 1024;
                          if (file.size > maxSizeInBytes) {
                            Notiflix.Notify.failure(
                              'The uploaded file is too large. The maximum size is 600 KB.'
                            );
                            e.target.value = null;
                            return;
                          }
                        }
                        setFile(file);
                        setFieldValue('avatarURL', URL.createObjectURL(file));
                        const formData = new FormData();
                        formData.append('avatar', file);
                        try {
                          dispatch(editData(formData));
                        } catch {}
                        setIsFormChanged(false);
                      }}
                      style={{ display: 'none' }}
                    />

                    <label
                      htmlFor="avatar-upload"
                      className={css.avatar_upload_btn}
                    >
                      <div className={css.icons}>
                        <AiFillPlusCircle
                          className={`${css.icon} ${css.myCustomIcon}`}
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <h3 className={css.user__name}>{userInfo.name || 'user'}</h3>
                <p className={css.user__role}>User</p>
              </div>
              <div className={css.user_form}>
                <label className={css.label}>
                  <p className={css.labelText}>User Name</p>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    className={css.user_form_input}
                    placeholder="User name"
                  />
                  <div className={css.feedback}>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className={css.invalidFeedback}
                    />
                  </div>
                </label>

                <label htmlFor="phone" className={css.label}>
                  <p className={css.labelText}>Phone</p>
                  <Field
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Enter your phone"
                    className={`${css.user_form_input} ${
                      touched.phone && !errors.phone
                        ? css.isValid
                        : css.isInvalid
                    }`}
                  />
                  <div className={css.feedback}>
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className={css.invalidFeedback}
                    />
                  </div>
                </label>

                <label htmlFor="birthday" className={css.label}>
                  <p className={css.labelText}>Birthday</p>
                  <label className={css.birthday__label}>
                    <DatePicker
                      name="birthday"
                      id="birthday"
                      type="date"
                      calendarStartDay={1}
                      dropdownMode="select"
                      yearDropdownItemNumber={100}
                      scrollableYearDropdown
                      selected={new Date(values.birthday)}
                      dateFormat="dd/MM/yyyy"
                      onChange={e => {
                        setFieldValue('birthday', e);
                        setTouched({ ...touched, birthday: true });
                      }}
                      maxDate={new Date()}
                    />
                    <IoIosArrowDown className={css.custom__datepicker__arrow} />
                  </label>
                  <div className={css.feedback}>
                    <ErrorMessage
                      name="birthday"
                      component="div"
                      className={css.invalidFeedback}
                    />
                  </div>
                </label>

                <label htmlFor="Skype" className={css.label}>
                  <p className={css.labelText}>Skype</p>
                  <Field
                    id="skype"
                    name="skype"
                    type="text"
                    placeholder="Add a skype number"
                    className={css.user_form_input}
                  />
                  <div className={css.feedback}>
                    <ErrorMessage
                      name="telegram"
                      component="div"
                      className={css.invalidFeedback}
                    />
                  </div>
                </label>

                <label htmlFor="email" className={css.label}>
                  <p className={css.labelText}>Email</p>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className={css.user_form_input}
                  />
                  <div className={css.feedback}>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={css.invalidFeedback}
                    />
                  </div>
                </label>
                <SaveChangesBtn isChanged={!dirty && !isFormChanged} />
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
