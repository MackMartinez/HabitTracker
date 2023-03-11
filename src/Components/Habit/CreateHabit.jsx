import React, {useState, useEffect} from "react";
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
    id: props.habitId,
    title:"",
    body:"",
    start_date:"",
    end_date:"",
    start_time: "",
    end_time:"",
    days:"",
    user_id: 2, //not sure yet
    completed: false 
  });
  
  const saveHabit = (event) => {
    // props.setHabitId(props.habitId + 1)
    // Convert Habit into standard event
    const habiturl = "http://localhost:8080/habit"
    const eventurl = "http://localhost:8080/habit/events"
    
    event.preventDefault();
    
    //loop through events generated and post request to db
    
    Axios.post(habiturl,{
      title: habit.title,
      body: habit.body,
      start_date:habit.start_date,
      end_date: habit.end_date,
      start_time: habit.start_time,
      end_time:habit.end_time,
      days: habit.days,
      user_id: 2, //not sure yet
      completed: false 
    })
    .then(res => {
      let eventsList = generateEvents(res.data[0], props.sunday)
      // console.log(res.data)
      for(let x = 0; x < eventsList.length; x++){
        let uniqueEvent = eventsList[x].unique_event_id
        // console.log(eventsList)
        Axios.post(eventurl,{unique_event_id:uniqueEvent, habit_id: res.data[0].id})
        .then(res => {
          console.log(res.data)
        })
      }
    })
    // Return to Calendar 
    props.setMode("SHOWING");
    // Clear the habit state?
    
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
          value={habit.body}
          multiline
          rows={4}
          name="body"
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
              name="start_date"
              value={habit.start_date}
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
              name="end_date"
              value={habit.end_date}
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
              name="start_time"
              value={habit.start_time}
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
              name="end_time"
              value={habit.end_time}
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