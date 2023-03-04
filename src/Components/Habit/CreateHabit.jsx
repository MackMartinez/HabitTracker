import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FormGroup, TextField } from "@mui/material";
import ButtonAppBar from "../Appbar";

export default function CreateHabit () {

  const textStyle = {margin:'8px 0px'}

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  return (
    <>
      <Grid item xs={10} >
        <Item style={{minHeight: "200px"}} >
          <FormGroup>
            <TextField 
              id="outlined-basic" 
              label="Habit Name" 
              variant="outlined"
              placeholder="Example: Study Javascript" 
              style={textStyle}
            />
            <h2>Why track this habit?</h2>
            <TextField 
              id="outlined-basic" 
              label="List one reason this is important to you!" 
              variant="outlined"
              placeholder="Example: I want to be a Javascript Developer" 
              style={textStyle}
              type="text"
            />
            <Button type="submit" color="primary" variant="contained">
              + Save Habit
            </Button>
          </FormGroup>
        </Item>
      </Grid>

    </>
  )
}