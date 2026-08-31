import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <main className="page">
      <h1>Login Page</h1>

      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />

      <button className="button" onClick={handleLogin}>
        Login
      </button>
    </main>
  );
};

export default Login;