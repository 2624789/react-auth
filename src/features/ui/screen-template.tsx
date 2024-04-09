import React, { ReactNode } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type Props = {
  children: ReactNode;
};

const ScreenTemplate: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true}>
        <Box
          sx={{
            bgcolor: "whitesmoke",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export { ScreenTemplate };
