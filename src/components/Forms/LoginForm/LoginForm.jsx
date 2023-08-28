// import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import loginSchema from './loginFormValidation';
import css from '../RegisterForm/RegisterForm.module.css';
import css2 from './LoginForm.module.css';
import AuthNavigate from '../../AuthNavigate/AuthNavigate';
import AuthBtn from '../../Buttons/AuthBtn/AuthBtn';
import icons from '../../../img/icons.svg';
import { logIn } from 'redux/auth/authOperations';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(<AiFillEyeInvisible />);

  const handleShowPassword = () => {
    if (type === 'password') {
      setIcon(<AiFillEye />);
      setType('text');
    } else {
      setIcon(<AiFillEyeInvisible />);
      setType('password');
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await dispatch(logIn(values));
      if (response.status === 200) {
        console.log('Login successful:', response);
        await navigate('/user/calendar');
        resetForm();
      } else {
        console.error('Login rejected:', response);
      }
    } catch (error) {
      console.error('Login rejected:', error);
    }
  };

  return (
    <>
      <div className={css.container}>
        <div className={css2.bgimages}></div>

        <Formik
          const
          initialValues={INITIAL_STATE}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form autoComplete="off" className={css.form}>
              <h1 className={css.title}>Log In</h1>

              <label
                className={
                  errors.email && touched.email
                    ? css.isInvalidLabel
                    : touched.email
                    ? css.isValidLabel
                    : css.label
                }
              >
                Email
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={values.email}
                  className={
                    errors.email && touched.email
                      ? css.isInvalid
                      : touched.email
                      ? css.isValid
                      : css.input
                  }
                />
                <div className={css.feedback}>
                  {touched.email && !errors.email ? (
                    <div className={css.validFeedback}>
                      This is an CORRECT email
                    </div>
                  ) : (
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={css.invalidFeedback}
                    ></ErrorMessage>
                  )}
                </div>
              </label>
              <label
                className={
                  errors.password && touched.password
                    ? css.isInvalidLabel
                    : touched.password
                    ? css.isValidLabel
                    : css.label
                }
              >
                Password
                <Field
                  id="password"
                  name="password"
                  type={type}
                  placeholder="Enter password"
                  className={
                    errors.password && touched.password
                      ? css.isInvalid
                      : touched.password
                      ? css.isValid
                      : css.input
                  }
                />
                <button
                  className={css.btnToggle}
                  type="button"
                  onClick={handleShowPassword}
                >
                  <div className={css.spanIcon}>{icon}</div>
                </button>
                <div className={css.feedback}>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={css.invalidFeedback}
                  ></ErrorMessage>
                </div>
              </label>

              <AuthBtn title={'Log In'} icon={`${icons}#log-in-01`} />
            </Form>
          )}
        </Formik>
        <AuthNavigate formType="login" />
      </div>
    </>
  );
};
