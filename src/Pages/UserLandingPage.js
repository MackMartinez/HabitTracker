import React, { useState, useEffect } from "react"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import ButtonAppBar from '../Components/Appbar';
import AddHabitButton from '../Components/Habit/AddHabitButton';
import HabitList from '../Components/Habit/HabitList';
import HabitCalendar from "../Components/Calendar";
import CreateHabit from "../Components/Habit/CreateHabit";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

 // Sets the details of the calendar
  
 const initialEvents = [
  {
    title: 'Lunch',
    body: 'Going to eat a cheeseburger',
    category: 'time',                       // Determines where in the calendar the habit is displayed (Time, allday or milestone)
    start: '2023-03-01T12:00:00',
    end: '2023-03-01T13:30:00',
    state: null,                            //Removes the 'busy' tag from the popout menu
    attendees: null,                        //Removes the person icon from the popout menu
    isPrivate: false,
    backgroundColor: "#1976d2",
    color: "white",
  },
  {
    title: 'Coffee Break',
    category: 'time',
    start: '2023-02-28T15:00:00',
    end: '2023-02-28T15:30:00',
    state: null,
    attendees: null,
    isPrivate: false,
    backgroundColor: "#1976d2",
    color: "white"
  },
];

export default function UserLandingPage() {
  const [calendarView, setCalendarView] = React.useState('week');
  const [events, setEvents] = useState(initialEvents);

  const handleChange = (event) => {
    setCalendarView(event.target.value);
  };

  let [date, setDate] = useState(new Date());
  let [startOfRange, setStartOfRange] = useState("");

  useEffect(() => {
    setDate(new Date())
  },[])

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; // To format the date being passes

  const [mode, setMode] = useState("SHOWING");

  const CREATING = "CREATING";
  const SHOWING = "SHOWING";
  console.log("Sunday user landing", startOfRange)


  return (
    <>
    <ButtonAppBar />
    <Grid 
      container 
      rowSpacing={2}
      columnSpacing={3}
      pt={12}
      >
      <Grid item xs={2}>
        <Item>{date.toLocaleDateString("en-US", options)}</Item>
      </Grid>
      <Grid item xs={2}>
        <AddHabitButton 
          setMode={setMode}
        />
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={2}>
        <Item>  
          <FormControlLabel
            value="start"
            control={
              <Radio
              checked={calendarView === 'week'}
              onChange={handleChange}
              value="week"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 15
                }}}
                />
              }
              label="Week"
              labelPlacement="top"
              />
          <FormControlLabel
            value="start"
            control={
              <Radio
              checked={calendarView === 'month'}
              onChange={handleChange}
              value="month"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'B' }}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 15
                }}}
                />
              }
              label="Month"
              labelPlacement="top"
              />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item style={{minHeight: "2000px", backgroundColor: "inherit"}}>
          Habit Summary
          <HabitList/>
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item>
         { mode === SHOWING && <HabitCalendar 
            view={calendarView}
            initialMonth={date.getMonth()}
            initialYear={date.getFullYear()}
            events={events}
            setStartOfRange={setStartOfRange}
          />}
         {mode === CREATING && <CreateHabit setMode={setMode} setEvents={setEvents} events={events} sunday={startOfRange}/> }
        </Item>
      </Grid>
    </Grid>
  </>
  );
}