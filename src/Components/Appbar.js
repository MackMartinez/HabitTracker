import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthContext from "../Context/AuthProvider";
import { useContext } from "react";

export default function ButtonAppBar(props) {

  const avatarStyle = {margin: "0px 0px 0px 10px"}

  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const navMyHabits = () => {
    navigate('/user/habit')
  }

  const navMyHome = () => {
    navigate('/user')
  }

  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});
    navigate('/login');
}
console.log(AuthContext);
  // const { auth } = props

  // const user = `Signed in as ${ auth.username }`

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={navMyHome}>Home</Button>
          <Button color="inherit" onClick={navMyHabits}>My Habits</Button>
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
          {/* if signed into an account */}
          <Button color="inherit"><Avatar style={avatarStyle}></Avatar></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}