import React, { useState } from "react";
import FormikForm from "formikForm";

const RegistrationForm = () => {
  // States for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // State to hold error messages
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    // Validation checks
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    // Additional validation can be added here

    setErrors(newErrors);
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear previous errors
    setErrors({});

    // Validate form before submitting
    if (validateForm()) {
      console.log({ username, email, password, confirmPassword });
      // Proceed with submitting data to a server or handling it accordingly
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username*</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}

      <label htmlFor="email">Email*</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

      <label htmlFor="password">Password*</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}

      <label htmlFor="confirmPassword">Confirm password*</label>
      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />

      <button type="submit">Sign up</button>
    </form>
  );
};

export default RegistrationForm;
