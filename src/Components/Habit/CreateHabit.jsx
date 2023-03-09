import React, {useState} from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { FormGroup, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import DaysToggleButtons from "./DaysToggleButton";
import { generateEvents } from "../../helpers/events";
import Axios from "axios";



export default function CreateHabit (props) {

  const textStyle = {margin:'8px 0px'}


const handleClick = () => {
  props.setMode("SHOWING");
}

  const [habit, setHabit] = useState({
    title:"",
    details:"",
    startDate:"",
    endDate:"",
    startTime: "",
    endTime:"",
    days:""
  });


  const saveHabit = (event) => {
  // Convert Habit into standard event
  let eventsList = generateEvents(habit, props.sunday)
  // Add to the state passed down by the calendar component
  props.setEvents(prev => ([...prev, ...eventsList]));

  // Return to Calendar 
  props.setMode("SHOWING");
  // Clear the habit state?

  event.preventDefault();
  
 //using back end column names.
  const url = "http://localhost:8080/habit"

  Axios.post(url,{
    title: habit.title,
    body: habit.title,
    start_date:habit.title,
    end_date: habit.title,
    start_time: habit.title,
    end_time:habit.title,
    days: habit.title,
    user_id: 2, //not sure yet
    completed: false 
  })
  .then(res => {
    console.log(res.data)
  })

}

const handleOnChange = (event) => {
const value = event.target.value;
setHabit({...habit, [event.target.name]: value})
}

  return (
    <>
      <Typography variant="h3"> Create your Habit</Typography>
      <FormGroup>
        <TextField 
          id="outlined-basic" 
          label="Habit Name" 
          variant="outlined"
          placeholder="Enter the name of your habit" 
          style={textStyle}
          type="text"
          value={habit.title}
          name="title"
          onChange={(event) => handleOnChange(event)}

        />
        <TextField 
          id="outlined-basic" 
          label="Habit Details" 
          variant="outlined"
          placeholder="Add a description of your habit" 
          style={textStyle}
          type="text"
          multiline
          rows={4}
          name="details"
          onChange={(event)=> handleOnChange(event)}
        />

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <DaysToggleButtons
            setHabit={setHabit}
          />

        </Grid>

        <Grid
         container
         direction="row"
         justifyContent="space-between"
         alignItems="center"
         xs={6.5}
        >
          <Grid
          item
          container
          direction="column"
          alignItems="center"
          >
            <TextField 
              id="outlined-basic" 
              variant="outlined"
              style={textStyle}
              type="date"
              name="startDate"
              value={habit.startDate}
              onChange={(event) => handleOnChange(event)}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
          >
            <TextField 
              id="outlined-basic" 
              variant="outlined"
              style={textStyle}
              type="date"
              name="endDate"
              value={habit.endDate}
              onChange={(event) => handleOnChange(event)}

            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
          >
            <TextField 
              id="outlined-basic" 
              variant="outlined"
              style={textStyle}
              type="time"
              name="startTime"
              value={habit.startTime}
              onChange={(event) => handleOnChange(event)}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
          >
            <TextField 
              id="outlined-basic" 
              variant="outlined"
              style={textStyle}
              type="time"
              name="endTime"
              value={habit.endTime}
              onChange={(event) => handleOnChange(event)}
            />
          </Grid>
        </Grid>
        
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="left"
          xs={12}
          spacing={1}
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
        <Button onClick={handleClick} color="primary" variant="contained">
          Cancel
        </Button>
        <Button onClick={saveHabit} type="submit" color="primary" variant="contained">
          Save
        </Button>
        
        </Grid>
      </FormGroup>

    </>
  )
}