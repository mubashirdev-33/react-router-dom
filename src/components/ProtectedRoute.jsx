
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Children, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import app from "../firebase/config";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  const getuser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false);
    });
  };

  useEffect(() => {
    getuser();
  }, []);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (user) {
    return Outlet ? <Outlet /> : Children;
  }else{
    return <Navigate to="/login" />;
  }

 
};

export default ProtectedRoute;

