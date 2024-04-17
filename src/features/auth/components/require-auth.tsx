import React from "react";

import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import { useAuthContext } from "../context/auth.provider";

interface Props {
  children: React.ReactNode;
}

const RequireAuth: React.FC<Props> = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }

  return <>{children}</>;
};

export { RequireAuth };
