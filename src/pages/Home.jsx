import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="page">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>

      <div className="buttons">
        <Link className="button" to="/products">View Products</Link>
        <Link className="button" to="/login">Login</Link>
      </div>
    </main>
  );
};

export default Home;