import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import background from "../../assets/homeImg.png";
import styled from "@mui/material/styles/styled";
import styles from "./Home.module.css";

// may get used at a later time
// const Background = styled("div")({
//   position: "absolute",
//   width: "75%",
//   height: "75%",
//   backgroundImage: `url(${background})`,
//   backgroundPosition: "right bottom",
//   right: 15,
//   bottom: 100,
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   zIndex: -1000,
// });

const Home = () => {
  return (
    <Grid container spacing={2} className={styles.sizeFix}>
      <CssBaseline />
      <Grid item xs={12} sm={6} sx={{ margin: "auto", textAlign: "center" }}>
        <Typography
          variant="h3"
          component="div"
          sx={{ fontFamily: "Gill Sans, sans-serif", fontWeight: 700 }}
        >
          Start tracking your project's progress with TaskFlow!
        </Typography>

        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ mt: "1rem" }}
        >
          TaskFlow is a project management tool that helps you organize your
          projects and tasks.
        </Typography>
        <Button
          variant="outlined"
          href="#"
          color="inherit"
          endIcon={<SendIcon />}
          sx={{
            mt: "1.5rem",
            textTransform: "none",
            width: "150px",
            textAlign: "center",
          }}
        >
          Try TaskFlow
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
