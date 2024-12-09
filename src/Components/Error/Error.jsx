import React from "react";
import "./Error.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oops! Page not found</h2>
      <p>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a href="/" className="home-button">Go to Homepage</a>
    </div>
  );
};

export default ErrorPage;
