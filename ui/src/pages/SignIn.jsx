import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';

import Button from '../components/Button.jsx';

const signup = function signupComponent() {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleFormSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <main className="container">
      <div className="signup p-4 border-2 rounded">
        <header className="signup__header -m-4 mb-6 pt-8 pb-4 bg-primary-400 text-white text-xl text-center">
          <h1>Account Sign In</h1>
        </header>

        <section className="signup__form">
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

          <p className="signup__signup text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-primary-400">
              Sign up here.
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default signup;
