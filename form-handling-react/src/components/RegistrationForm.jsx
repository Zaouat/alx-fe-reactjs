import React from "react";
import { Formik, Form, Field } from "formik";

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <label htmlFor="name">Username*</label>
          <Field name="name" type="text" />

          <label htmlFor="email">Email*</label>
          <Field name="email" type="email" />

          <label htmlFor="password">Password*</label>
          <Field name="password" type="password" />

          <label htmlFor="confirmPassword">Confirm password*</label>
          <Field name="confirmPassword" type="password" />

          {/* <label htmlFor="role">Role*</label>
          <Field name="role" as="select">
            <option value="">Select an option</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </Field> */}

          <button type="submit">Sign up</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
