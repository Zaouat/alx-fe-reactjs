import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./formikForm";
import "./components/style.css";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Register Alx</h1>
        <p>
          Sign up or <a href="#">sign in to your account</a>
        </p>
        <RegistrationForm />
      </main>
    </div>
  );
}

export default App;
