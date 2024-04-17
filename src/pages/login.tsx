import React from "react";

import { Navigate } from "react-router-dom";

import { ScreenTemplate } from "../features/ui";
import { LoginForm } from "../features/auth";
import { useAuthContext } from "../features/auth/context/auth.provider";

const Login: React.FC = () => {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  return (
    <ScreenTemplate>
      <LoginForm />
    </ScreenTemplate>
  );
};

export { Login };
