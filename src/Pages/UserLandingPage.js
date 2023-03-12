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
import { Typography } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

 // Sets the details of the calendar
  

export default function UserLandingPage(props) {
  // const [calendarView, setCalendarView] = React.useState('week');
  const [habitId, setHabitId] = useState(0)

  const handleChange = (event) => {
    props.setState(prev => ({...prev, view: event.target.value }));
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
              checked={props.state.view === 'week'}
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
              checked={props.state.view === 'month'}
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
        <Item style={{maxheight: "450px", backgroundColor: "inherit"}}>
         <Typography>Active Habits</Typography>
          <HabitList date={date} upcoming={true} state={props.state} setState={props.setState}/>
        </Item>
        <Item style={{maxheight: "450px", backgroundColor: "inherit"}}>
         <Typography>Inactive Habits</Typography>
          <HabitList date={date} upcoming={false} state={props.state} setState={props.setState}/>
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item>
         { mode === SHOWING && <HabitCalendar 
            initialMonth={date.getMonth()}
            initialYear={date.getFullYear()}
            setStartOfRange={setStartOfRange}
            sunday={startOfRange}
            state={props.state}
            setState={props.setState}
          />}
         {mode === CREATING && <CreateHabit setMode={setMode} sunday={startOfRange} habitId={habitId} setHabitId={setHabitId} state={props.state} setState={props.setState}/> }
        </Item>
      </Grid>
    </Grid>
  </>
  );
}