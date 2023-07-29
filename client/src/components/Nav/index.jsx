import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  Stack,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/TaskFlow-Logo.png";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import AddchartIcon from "@mui/icons-material/Addchart";
import auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => {
      navigate("/");
    });
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src={logo}
            alt="TaskFlow Logo"
            style={{
              // 10% of original size
              width: "120px",
              height: "41.5px",
              contain: "content",
              marginTop: "5px",
            }}
          />
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="Home"
            onClick={() => navigate("/")}
          >
            <Tooltip title="Home">
              <HomeIcon />
            </Tooltip>
          </IconButton>
          {auth.loggedIn() ? (
            <IconButton
              size="large"
              color="inherit"
              aria-label="Profile"
              onClick={() => navigate("/profile")}
            >
              <Tooltip title="Profile">
                <PersonIcon />
              </Tooltip>
            </IconButton>
          ) : (
            ""
          )}

          <IconButton
            size="large"
            color="inherit"
            aria-label="Create Task"
            onClick={() => navigate("/TaskBoard")}
          >
            <Tooltip title="Create Task">
              <AddchartIcon />
            </Tooltip>
          </IconButton>

          {auth.loggedIn() ? (
            <IconButton size="large" color="inherit" onClick={handleLogout}>
              <Tooltip title="Logout">
                <LogoutIcon />
              </Tooltip>
            </IconButton>
          ) : (
            <Tooltip title="Login">
              <IconButton
                size="large"
                color="inherit"
                aria-label="Login"
                onClick={() => navigate("/login")}
              >
                <LoginIcon />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
