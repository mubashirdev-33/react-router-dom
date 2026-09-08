import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="page">
         <div className="profile-loading">
          <div className="profile-spinner"></div>
         
        </div>
      </main>
    );
  }
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