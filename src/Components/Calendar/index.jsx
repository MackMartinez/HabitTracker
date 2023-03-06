/* ES6 module in Node.js environment */
import  React, { useState } from "react";
import Calendar from "@toast-ui/react-calendar";
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import Grid from '@mui/material/Unstable_Grid2';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Button from '@mui/material/Button';

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

  const handleNext = () => {
    const currentCal = calref.current.getInstance(); // We use this so that we get the current model from the DOM since there usually is a lag between what is available and what is displayed
    currentCal.next();
    let date = currentCal.getDate();
    setCalendarMonth(date.d.getMonth());
    setCalendarYear(date.d.getFullYear())
  }

  const handlePrev = () => {
    const currentCal = calref.current.getInstance();
    let date = currentCal.getDate();
    setCalendarMonth(date.d.getMonth());
    setCalendarYear(date.d.getFullYear())
    currentCal.prev();
  }

  const handleToday = () => {
    const currentCal = calref.current.getInstance(); // Repeating this code each time to ensure that the current state is rerendered vs having a stale state from the intial render
    currentCal.today();
    let date = currentCal.getDate();
    setCalendarMonth(date.d.getMonth());
    setCalendarYear(date.d.getFullYear())
  }

  const [calendarMonth, setCalendarMonth] = useState(props.initialMonth);
  const [calendarYear, setCalendarYear] = useState(props.initialYear);

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
          events={initialEvents}
          useDetailPopup={false}
          useFormPopup={false}
          />
      </Grid>
    </Grid>
  );
}
