import React from "react";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import { ScreenTemplate } from "../features/ui";

const Login: React.FC = () => {
  return <ScreenTemplate>
    <Typography variant="h3">
      <Link to="/">Login</Link>
    </Typography>
  </ScreenTemplate>;
};

export { Login };
