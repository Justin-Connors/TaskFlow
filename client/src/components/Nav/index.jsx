import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Icon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/TaskFlow-Logo.png";
import LoginIcon from "@mui/icons-material/Login";

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <img
            src={logo}
            alt="TaskFlow"
            style={{
              // 10% of original size
              width: "120px",
              height: "41.5px",
            }}
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Home"
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Login"
          >
            <LoginIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
