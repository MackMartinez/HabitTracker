import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

export default function HabitTabPanel (props) {
  
  return(
    <Grid style={{width:"500px", height: "500px"}}>
      <Grid>
        <Typography>Habit Notes</Typography>
        {props.habit.body}
      </Grid>
      <Grid>
        <Typography>Habit Range</Typography>
        {`Start: ${props.habit.start_date} End: ${props.habit.end_date}`}
      </Grid>
      <Grid>
        <Typography>Habit Time</Typography>
        {`Start: ${props.habit.start_time} End: ${props.habit.end_time}`}
      </Grid>
      <Grid >
      <Button onClick={()=> console.log("edit")} type="submit" color="primary" variant="contained">
            Edit
      </Button>
      <Button onClick={()=> console.log("delete")} color="error" variant="contained">
            Delete
      </Button>
      </Grid>
    </Grid>
  )

}