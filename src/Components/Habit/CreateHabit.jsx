import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FormGroup, TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CreateHabit () {

  const textStyle = {margin:'8px 0px'}

  const daysButtonStyle = {maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', margin: '20px 20px 20px 20px'}

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
              placeholder="Add a description of you habit" 
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
              <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                S
              </Button>
              <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                M
              </Button>
              <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                T
              </Button>
              <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                W
              </Button>
              <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                T
              </Button>
              <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                F
              </Button>
              <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                S
              </Button>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              xs={1}
            >
              <span>Repeat</span>
             <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Daily" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Weekly" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Monthly" />
            </FormGroup>
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