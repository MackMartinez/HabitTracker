import React from "react"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import ButtonAppBar from '../Components/Appbar';
import AddHabitButton from '../Components/Habit/AddHabitButton';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import HabitList from '../Components/Habit/HabitList';
import { Schedule } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const calendars = [{ useDetailPopup: true }]; // from the calendar index file

const initialEvents = [
  {
    id: '1',
    calendarId: 'cal1',
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
    id: '2',
    calendarId: 'cal1',
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

  const handleChange = (event) => {
    setCalendarView(event.target.value);
  };

  const calref = React.useRef(null);

  const handlenext = () => {
    const currentCal = calref.current.getInstance();
    currentCal.next();
    // calref.current.next()
  }

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
        <Item>Current Date</Item>
      </Grid>
      <Grid item xs={2}>
        <AddHabitButton />
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
          Calendar
          <Grid>
            <button>Prev</button>
            <button onClick={handlenext}>Next</button>
            <Calendar
              ref={calref}
              height="900px"
              view={calendarView}
              month={{
                dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                visibleWeeksCount: 3,
              }}
              calendars={calendars}
              events={initialEvents}
              useDetailPopup={true}
              useFormPopup={true}
        
      />
          </Grid>
        </Item>
      </Grid>
    </Grid>
  </>
  );
}


<Schedule view="something"/>