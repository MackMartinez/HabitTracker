import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import axios from "axios";

export default function HabitTabPanel (props) {
  
  const editHabit = () =>
  {
    console.log("edit");
  }

  const deleteHabit = () =>
  {
    const habiturl = `http://localhost:8080/habit/${props.habit.id}`
   
    
    axios.delete(habiturl)
    .then((res)=> {
      let remainingHabits = props.state.habits.filter((habit)=>habit.id !== props.habit.id);
      props.setState(prev => ({...prev, habits: remainingHabits}));
      console.log("Deleted");
  })
  }


  return(
    <Grid style={{width:"500px", height: "500px"}}>
      <Grid>
        <Typography>Habit id</Typography>
        {props.habit.id}
      </Grid>
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
      <Button onClick={editHabit} type="submit" color="primary" variant="contained">
            Edit
      </Button>
      <Button onClick={deleteHabit} color="error" variant="contained">
            Delete
      </Button>
      </Grid>
    </Grid>
  )

}