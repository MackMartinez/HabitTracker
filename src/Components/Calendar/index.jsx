/* ES6 module in Node.js environment */
import  React, { useState, useEffect } from "react";
import Calendar from "@toast-ui/react-calendar";
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import Grid from '@mui/material/Unstable_Grid2';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Button from '@mui/material/Button';
import useApplicationData from "../../hooks/useApplicationData";
import { generateEvents } from "../../helpers/events";


  let months = {  // TUI returns digits as months, so this converts to a string
    0 : "January",
    1 : "February",
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10 : "November",
    11 : "December" 
  }

 export default function HabitCalendar(props){

  const calref = React.useRef();  // Allows the us to reference the Calendar class so that we can execute the Toast UI class methods

  const rangeStart = () => {  // Allows us to get the start of the date range - Sunday
    const currentCal = calref.current.getInstance();
    props.setStartOfRange(currentCal.getDateRangeStart());
  }


  const handleNext = () => {
    const currentCal = calref.current.getInstance(); // We use this so that we get the current model from the DOM since there usually is a lag between what is available and what is displayed
    currentCal.next();
    let date = currentCal.getDate();
    setCalendarMonth(date.d.getMonth());
    setCalendarYear(date.d.getFullYear());
    rangeStart(); // Need to update each time we move to a new week
  }

  const handlePrev = () => {
    const currentCal = calref.current.getInstance();
    let date = currentCal.getDate();
    setCalendarMonth(date.d.getMonth());
    setCalendarYear(date.d.getFullYear());
    currentCal.prev();
    rangeStart(); 
  }

  const handleToday = () => {
    const currentCal = calref.current.getInstance(); // Repeating this code each time to ensure that the current state is rerendered vs having a stale state from the intial render
    currentCal.today();
    let date = currentCal.getDate();
    setCalendarMonth(date.d.getMonth());
    setCalendarYear(date.d.getFullYear());
    rangeStart();
  }

  const [calendarMonth, setCalendarMonth] = useState(props.initialMonth);
  const [calendarYear, setCalendarYear] = useState(props.initialYear);

  useEffect(() => { // Need to use useEffect to get the date on load
    rangeStart();
  },[])
  
  const { state } = useApplicationData();
  let habits = state.habits
  let eventsArray = []
  
  // console.log( generateEvents(habit, date))
  if (props.sunday) {
    habits.forEach((habit) => {
      eventsArray.push(generateEvents(habit, props.sunday));
      
    });
    
  }
  
  let events = eventsArray.flat();

  return ( 
    <Grid >
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
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        > {/* item flag adds padding to the item*/}
          <Button variant="outlined" onClick={handleToday}>Today</Button>
          <NavigateBeforeIcon onClick={handlePrev}/>
          <NavigateNextIcon onClick={handleNext}/>
        </Grid>
        <span>{months[calendarMonth]} {calendarYear}</span>

      </Grid>
      <Grid>
        <Calendar  // Calendar component from Toast UI which require certain flags to operate
          ref={calref}
          height="900px"
          view={props.view}
          month={{
            dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            visibleWeeksCount: 3,
          }}
          useDetailPopup={false}
          useFormPopup={false}
          events={events}
          />
      </Grid>
    </Grid>
  );
}
