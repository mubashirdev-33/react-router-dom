import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config.js";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {

    if (!email.trim() || !password.trim()) {
      return toast.error("Please fill in all fields");
    }

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if (user) {
          toast.success("Login successful!");
      setEmail("");
      setPassword("");
          setTimeout(() => {
            navigate("/dashboard/profile");
          }, 2000);
        }
        // ...
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          return toast.error("Please enter a valid email");
        }

        if (error.code === "auth/wrong-password") {
          return toast.error("Wrong password");
        }

        if (error.code === "auth/invalid-credential") {
          return toast.error("Invalid email or password");
        }


      });
  };

  return (
    <main className="page">
      <ToastContainer />
      <h1>Login Page</h1>

      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" />

      <button className="button" onClick={loginHandler}>
        Login
      </button>
    </main>
  );
};

export default Login;