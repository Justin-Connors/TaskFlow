import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import styles from "./Footer.module.css";

function Copyright() {
  return (
    <Typography variant="body1" color="white" align="center">
      {"© "}
      <Link color="inherit" href="#" className={styles.footerDec}>
        TaskFlow
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        className={styles.footer}
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm" fixed>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
