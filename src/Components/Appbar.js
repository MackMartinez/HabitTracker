import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";
import AppBarMenuButton from "./AppBarMenu";

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

  const user = auth.user;

  const avatar = auth.avatar;

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
            {user}
            <Avatar style={avatarStyle} src={avatar}></Avatar>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
