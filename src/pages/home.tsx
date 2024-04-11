import React from "react";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import { ScreenTemplate } from "../features/ui";

const Home: React.FC = () => {
  return <ScreenTemplate>
    <Typography variant="h3">
      <Link to="/login">go to login</Link>
    </Typography>
  </ScreenTemplate>;
};

export { Home };
