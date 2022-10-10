import React, { useState, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../components/Button.jsx';
import AuthContext from '../components/context/AuthContext.jsx';
import { promiseResolver } from '../utilities/helpers.js';

const ErrorAlert = function ErrorAlertComponent({ message }) {
  return (
    <div className="error-alert w-full mb-2 p-2 bg-red-200 rounded text-center">
      {message}
    </div>
  );
};

const SignIn = function SignInComponent() {
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const handleFormSubmit = async (values, { setSubmitting }) => {
    if (errorStatus) setErrorStatus(false);

    const [_, loginError] = await promiseResolver(auth.signin(values));

    if (loginError) {
      setErrorStatus(true);
      setErrorMessage(loginError.message);
      setSubmitting(false);

      return undefined;
    }

    navigate('/');

    return undefined;
  };

  return (
    <main className="container">
      <div className="signin p-4 border-2 rounded">
        <header className="signin__header -m-4 mb-6 pt-8 pb-4 bg-primary-400 text-white text-xl text-center">
          <h1>Account Sign In</h1>
        </header>

        {errorStatus && <ErrorAlert message={errorMessage} />}

        <section className="signin__form">
          <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
            {({ isSubmitting }) => (
              <Form className="mb-5">
                <Field name="username">
                  {({ field }) => (
                    <div className="form-section mb-4">
                      <label htmlFor="username" className="block mb-2">
                        Username
                      </label>

                      <input
                        type="text"
                        id="username"
                        {...field}
                        className="rounded w-full border-slate-400"
                      />
                    </div>
                  )}
                </Field>

                <Field name="password">
                  {({ field }) => (
                    <div className="form-section mb-6">
                      <label htmlFor="password" className="block mb-2">
                        Password
                      </label>

                      <input
                        type="password"
                        id="password"
                        {...field}
                        className="rounded w-full border-slate-400"
                      />
                    </div>
                  )}
                </Field>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full"
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>

          <p className="signin__signin text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/signin" className="text-primary-400">
              Sign up here.
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default SignIn;
