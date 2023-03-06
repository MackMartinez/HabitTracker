import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FormGroup, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import DaysToggleButtons from "./DaysToggleButton";

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
        <Item style={{minHeight: "200px", maxWidth: "800px"}} >
          <Typography variant="h3"> Create your Habit</Typography>
          <FormGroup>
            <TextField 
              id="outlined-basic" 
              label="Habit Name" 
              variant="outlined"
              placeholder="Enter the name of your habit" 
              style={textStyle}
            />
            <TextField 
              id="outlined-basic" 
              label="Habit Details" 
              variant="outlined"
              placeholder="Add a description of your habit" 
              style={textStyle}
              type="text"
              multiline
              maxRows={4}
            />
            <Grid
             item
             container
             direction="row"
             justifyContent="space-between"
             alignItems="center"
            >
              <Grid
              item
              container
              direction="column"
              alignItems="center"
              >
                <span>Start Date</span>
                <TextField 
                  id="outlined-basic" 
                  variant="outlined"
                  style={textStyle}
                  type="date"
                />
              </Grid>
              <Grid
              item
              container
              direction="column"
              alignItems="center"
              >
                <span>End Date</span>
                <TextField 
                  id="outlined-basic" 
                  variant="outlined"
                  style={textStyle}
                  type="date"
                />
              </Grid>
              <Grid
              item
              container
              direction="column"
              alignItems="center"
              >
                <span>Start Time</span>
                <TextField 
                  id="outlined-basic" 
                  variant="outlined"
                  style={textStyle}
                  type="time"
                />
              </Grid>
              <Grid
              item
              container
              direction="column"
              alignItems="center"
              >
                <span>End Time</span>
                <TextField 
                  id="outlined-basic" 
                  variant="outlined"
                  style={textStyle}
                  type="time"
                />
              </Grid>
            </Grid>
            <Grid
              item
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              xs={1}
            >
              <DaysToggleButtons/>
            </Grid>
            <Grid
              item
              // container
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              xs={1}
            >
              <Typography>* Habits will repeat weekly until the designated end date</Typography>
             
            </Grid>


            <Grid
              item
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
            <Button type="submit" color="primary" variant="contained">
              Cancel
            </Button>
            <Button type="submit" color="primary" variant="contained">
              Save
            </Button>

            </Grid>
          </FormGroup>
        </Item>
      </Grid>

    </>
  )
}