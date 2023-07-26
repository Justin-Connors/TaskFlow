import React from "react";
import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import background from "../../assets/homeImg.png";
import styled from "@mui/material/styles/styled";

const Background = styled("div")({
  position: "absolute",
  width: "100%",
  height: "90%",
  backgroundImage: `url(${background})`,
  backgroundPosition: "right",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  zIndex: -1,
});

const Home = () => {
  return (
    <Grid container spacing={2}>
      <CssBaseline />
      <Grid item xs={12} sm={6}>
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
          }}
        >
          Try TaskFlow
        </Button>
      </Grid>
      <Background />
    </Grid>
  );
};

export default Home;
