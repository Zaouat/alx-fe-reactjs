import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Formik values:", values);
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
