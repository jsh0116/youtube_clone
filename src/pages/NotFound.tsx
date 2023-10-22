import React from 'react';
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const routerError: any = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{routerError.statusText || routerError.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
