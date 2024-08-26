import React, { useState } from "react";

const RegistrationForm = () => {
  // Define states for each field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission logic, maybe logging or sending to an API
    console.log({ username, email, password, confirmPassword });
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

      <label htmlFor="email">Email*</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="password">Password*</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

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
