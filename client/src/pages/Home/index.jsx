import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import background from "../../assets/background.png";

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "90%", marginTop: "4rem", marginLeft: "1rem" }}
    >
      <Grid item xs={6}>
        <Typography
          variant="h3"
          component="div"
          color="inherit"
          sx={{ fontFamily: "Gill Sans, sans-serif" }}
        >
          Start tracking your projects progress with TaskFlow!
        </Typography>

        <Typography
          variant="caption"
          component="div"
          color="inherit"
          sx={{ marginTop: "1rem" }}
        >
          TaskFlow is a project management tool that helps you organize your
          projects and tasks.
        </Typography>
        <Button
          variant="outlined"
          href="#"
          color="inherit"
          fontSize="large"
          endIcon={<SendIcon />}
          sx={{
            textTransform: "none",
            width: "100px",
            marginTop: "1rem",
          }}
        >
          TaskFlow
        </Button>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          verticalAlign: "bottom",
        }}
      />
    </Grid>
  );
};

export default Home;
