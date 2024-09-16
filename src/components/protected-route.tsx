import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

  const randoAuth = Math.random() > 0.1;
  const [authenticated] = useState(randoAuth);

  return authenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
