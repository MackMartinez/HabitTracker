import React from "react";
import { Grid, Paper, Avatar, TextField, Checkbox, FormGroup, FormControlLabel, Button } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Register () {

  const paperStyle = {
    padding: 20,
    height: 'auto',
    width: '50vh',
    margin: '70px auto'
  }

  const avatarStyle = {backgroundColor: 'blue'}

  const textStyle = {margin:'8px 0px'}



  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Register Here</h2>
          <FormGroup>
            <TextField 
              id="outlined-basic" 
              label="First Name" 
              variant="outlined"
              placeholder="John" 
              style={textStyle}
            />
            <TextField 
              id="outlined-basic" 
              label="Last Name" 
              variant="outlined"
              placeholder="Doe" 
              style={textStyle}
            />
            <TextField 
              id="outlined-basic" 
              label="Email" 
              variant="outlined"
              placeholder="user@email.com" 
              style={textStyle}
            />
            <TextField 
              id="outlined-basic" 
              label="Password" 
              variant="outlined"
              type="password"
              //Must be 6 characters minimum
              placeholder="xxxxxx" 
              style={textStyle}
            />
            <TextField 
              id="outlined-basic" 
              label="Confirm Password" 
              variant="outlined"
              type="password"
              //Must be 6 characters minimum
              placeholder="xxxxxx" 
              style={textStyle}
            />
            <Button type="submit" color="primary" variant="contained">
              Register
            </Button>

          </FormGroup>
        </Grid>
      </Paper>
    </Grid>

  );
}