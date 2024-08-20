import React from "react";
import "../App.css";
const Header = ({ title }) => {
  return (
    <header>
      <h2 className="app-header">{title}</h2>
      {/* Navigation can be added here if needed */}
    </header>
  );
};

export default Header;
