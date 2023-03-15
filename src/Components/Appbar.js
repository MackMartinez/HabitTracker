import * as React from "react";
import {AppBar, Box, Toolbar, Typography, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";
import AppBarMenuButton from "./AppBarMenu";
import {
  faCoffee,
  faMusic,
  faBicycle,
  faBolt,
  faHeartbeat,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonAppBar(props) {
  const avatarStyle = { margin: "0px 0px 0px 10px" };

  const navigate = useNavigate();
  const logout = useLogout();

  const navMyHabits = () => {
    navigate("/user/habit");
  };

  const navMyHome = () => {
    navigate("/user");
  };

  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  const { auth } = useAuth();

  let user = auth.user;

  let avatar = auth.avatar;

  if (!avatar) {
    // handle case where avatar is not defined
    avatar = "faCoffee";
  }

  avatar = avatar.charAt(0).toUpperCase() + avatar.slice(1);
  avatar = `fa${avatar}`;

  let newAvatar;
  switch (avatar) {
    case "faCoffee":
      newAvatar = faCoffee;
      break;
    case "fafaMusic":
      newAvatar = faMusic;
      break;
    case "faBicycle":
      newAvatar = faBicycle;
      break;
    case "faBolt":
      newAvatar = faBolt;
      break;
    case "faHeartbeat":
      newAvatar = faHeartbeat;
      break;
    case "faFutbol":
      newAvatar = faFutbol;
      break;
    default:
      newAvatar = faCoffee; // set a default icon incase of no icon
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <AppBarMenuButton />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" onClick={navMyHome}>
              Home
            </Button>
            <Button color="inherit" onClick={navMyHabits}>
              My Habits
            </Button>
          </Typography>
          <Button color="inherit" onClick={signOut}>
            Logout
          </Button>
          {/* if signed into an account */}
          <Button color="inherit">
            <span>{user}</span>
            <span style={{ marginLeft: "8px" }}>
              <FontAwesomeIcon icon={newAvatar} size="2x" />
            </span>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
