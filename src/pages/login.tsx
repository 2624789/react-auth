import React from "react";

import { ScreenTemplate } from "../features/ui";
import { LoginForm } from "../features/auth";

const Login: React.FC = () => {
  return (
    <ScreenTemplate>
      <LoginForm />
    </ScreenTemplate>
  );
};

export { Login };
