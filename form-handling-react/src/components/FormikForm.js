import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function FormikForm() {
  return React.createElement(Formik, {
    initialValues: { username: "", email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Formik values:", values);
      setSubmitting(false);
    },
    children: (formik) =>
      React.createElement(
        Form,
        null,
        React.createElement(
          "div",
          null,
          React.createElement("label", { htmlFor: "username" }, "Username:"),
          React.createElement(Field, { name: "username", type: "text" }),
          React.createElement(ErrorMessage, {
            name: "username",
            component: "div",
          })
        ),
        React.createElement(
          "div",
          null,
          React.createElement("label", { htmlFor: "email" }, "Email:"),
          React.createElement(Field, { name: "email", type: "email" }),
          React.createElement(ErrorMessage, { name: "email", component: "div" })
        ),
        React.createElement(
          "div",
          null,
          React.createElement("label", { htmlFor: "password" }, "Password:"),
          React.createElement(Field, { name: "password", type: "password" }),
          React.createElement(ErrorMessage, {
            name: "password",
            component: "div",
          })
        ),
        React.createElement("button", { type: "submit" }, "Register")
      ),
  });
}

export default FormikForm;
