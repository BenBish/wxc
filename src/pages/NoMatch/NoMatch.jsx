import React from "react";
import { Link } from "@reach/router";

const NoMatch = () => {
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">Oops</div>
        <div className="card-body">
          <h5 className="card-title">Something went wrong</h5>
          <p className="card-text">
            It could be that you navigated to a page that did not exist or
            something is broken.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
