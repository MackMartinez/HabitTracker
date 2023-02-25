import React from "react";
import { Grid, Paper, Avatar, TextField } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Login () {

  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 280,
    margin: '70px auto'
  }

  const avatarStyle = {backgroundColor: 'blue'}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Login</h2>
          <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            placeholder="user@email.com" 
          />
          <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            type="password"
            //Must be 6 characters minimum
            placeholder="xxxxxx" 
          />
        </Grid>
      </Paper>
    </Grid>

  );
}