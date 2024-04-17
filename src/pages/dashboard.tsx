import React from "react";

import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

import { ScreenTemplate } from "../features/ui";
import { useAuthContext } from "../features/auth/context/auth.provider";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();
  
  const handleLogout = () => {
    navigate("/login");
    logout();
  }

  return <ScreenTemplate>
    <Typography variant="h3">
      Dashboard
    </Typography>
    <ul>
      <li>
        <Typography component="p">
          {user?.name}
        </Typography>
      </li>
      <li>
        <Typography component="p">
          {user?.username}
        </Typography>
      </li>
      <li>
        <Typography component="p">
          is admin?: { user?.isAdmin ? "yes" : "no" }
        </Typography>
      </li>
    </ul>
    <Box>
      <Button variant="contained" onClick={handleLogout}>Log out</Button>
    </Box>    
  </ScreenTemplate>;
};

export { Dashboard };
