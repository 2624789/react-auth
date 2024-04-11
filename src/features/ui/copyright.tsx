import React, { ReactNode } from "react";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Copyright: React.FC<any> = ({ props }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export { Copyright };
