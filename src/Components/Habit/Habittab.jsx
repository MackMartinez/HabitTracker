import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import axios from "axios";

export default function HabitTabPanel (props) {
  
  const editHabit = () =>
  {
    props.setState(prev => ({...prev, selected : props.habit }))
    props.setEditMode(true);
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
  const rootStyles = {
    width: '400px',
    height: '400px',
    padding: '16px',
    backgroundColor: '#fff',
    display:'flex',
    justifyContent:'space-between'
  };

  const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
  };

  const editButtonStyles = {
    backgroundColor: '#1976d2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  };

  const deleteButtonStyles = {
    backgroundColor: '#f44336',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  };

  const dateStyles = {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  };


  return (
    <Grid container direction="column" style={rootStyles}>
      <Grid item>
        <Typography variant="h4">{props.habit.title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">Description</Typography>
        <Typography variant="body1">{props.habit.body}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">Date Range</Typography>
        <Typography variant="body1">
          Start: {props.habit.start_date};
          End: {props.habit.end_date}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">Time</Typography>
        <Typography variant="body1">
          Start: {props.habit.start_time} ;
          End: {props.habit.end_time}
        </Typography>
      </Grid>
      <Grid item style={buttonContainerStyles}>
        <Button onClick={editHabit} style={editButtonStyles} variant="text">
          Edit
        </Button>
        <Button onClick={deleteHabit} style={deleteButtonStyles} variant="contained">
          Delete
        </Button>
      </Grid>
    </Grid>
  );

}