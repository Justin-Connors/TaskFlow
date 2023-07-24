import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import background from "../../assets/background.png";

const Home = () => {
  return (
    <Grid container spacing={2} sx={{ width: "90%", margin: "4rem auto" }}>
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
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          minHeight: "300px",
        }}
      />
    </Grid>
  );
};

export default Home;
