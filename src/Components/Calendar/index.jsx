/* ES6 module in Node.js environment */
import React from "react";
import Calendar from "@toast-ui/react-calendar";
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import Grid from '@mui/material/Unstable_Grid2';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Button from '@mui/material/Button';


 // Sets the details of the calendar
  
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

 export default function HabitCalendar(props){

  const calref = React.useRef(null);  // Allows the us to reference the Calendar class so that we can execute the Toast UI class methods

  const handlenext = () => {
    const currentCal = calref.current.getInstance(); // We use this so that we get the current model from the DOM since there usually is a lag between what is available and what is displayed
    currentCal.next();
  }

  const handleprev = () => {
    const currentCal = calref.current.getInstance();
    currentCal.prev();
  }


   return ( 
    <Grid >
      <Grid 
        item
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      > {/* item flag adds padding to the item*/}
        <Button variant="outlined">Today</Button>
        <NavigateBeforeIcon onClick={handleprev}/>
        <NavigateNextIcon onClick={handlenext}/>
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
          calendars={calendars}
          events={initialEvents}
          useDetailPopup={true}
          useFormPopup={true}
          />
      </Grid>
    </Grid>
  );
}
