import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./Footer.module.css";

function Copyright() {
  return (
    <Typography variant="body1" color="white" align="center">
      {"© "}
      <Link color="inherit" href="" className={styles.decoration}>
        TaskFlow
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="sm"
        ></Container>
        <Box
          className={styles.footer}
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
