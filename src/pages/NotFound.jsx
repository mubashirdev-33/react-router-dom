import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link className="button" to="/">Go Home</Link>
    </main>
  );
};

export default NotFound;