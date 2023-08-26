// import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { FcOk } from 'react-icons/fc';
// import { MdOutlineLogin } from 'react-icons/md';
// import { BiErrorCircle } from 'react-icons/bi';
import registerSchema from '../RegisterForm/Validation';
import css from '../RegisterForm/RegisterForm.module.css';
import css2 from './LoginForm.module.css';
import AuthNavigate from '../../AuthNavigate/AuthNavigate';
import AuthBtn from '../../Buttons/AuthBtn/AuthBtn';
import icons from '../../../img/icons.svg';

const initialState = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const handleShowPassword = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <div className={css.container}>
        <div className={css2.bgimages}></div>

        <Formik
          const
          initialValues={initialState}
          validationSchema={registerSchema}
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
                  placeholder="nadiia@gmail.com"
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
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.invalidFeedback}
                  ></ErrorMessage>

                  {/* {touched.email && errors.email ? (
                    <BiErrorCircle className={css2.iconError} />
                  ) : (
                    ''
                  )} */}
                  {!errors.email && values.email !== '' ? (
                    <>
                      <p className={css2.success_message}>
                        This is an CORRECT email
                      </p>
                      {/* <FcOk className={css2.iconOk} /> */}
                    </>
                  ) : (
                    ''
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
                  type="password"
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
                  <div className={css.spanIcon}>
                    {
                      // icon here
                    }
                  </div>
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