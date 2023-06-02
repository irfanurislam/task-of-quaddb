import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <h1 className="display-4 font-weight-bold mb-4">Error {status || 404}</h1>
      <img
        src="https://i.ibb.co/cXFV9Mz/error.png" // Replace with the path to your error image
        alt="Error"
        className="mb-4"
        style={{width: "400px"}}
      />
      <p className="lead text-secondary">Page not found {error?.message}</p>
      <Link to="/" className="mt-4 btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;