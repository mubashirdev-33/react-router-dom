import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main className="page">
      <h1>Signup Page</h1>

      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Create Password" />

      <button className="button">Signup</button>

      <p>Already have an account?</p>
      <button className="Already-button">
        <Link to="/login">Login</Link>
      </button>
    </main>
  );
};

export default Signup;