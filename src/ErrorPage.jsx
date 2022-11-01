import { Routes, Route, Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error">
      <p className="l1">404 error</p>
      <p className="l2">We can’t find that page</p>
      <p className="l3">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <div className="link-button">
        <Link className="l4" to="/">
          Take me home
        </Link>
        <Link className="l5" to="/">
          Go back
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
