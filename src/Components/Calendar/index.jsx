/* ES6 module in Node.js environment */
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';



const calendars = [{ useDetailPopup: true }];
  



const initialEvents = [
    {
      id: '1',
      calendarId: 'cal1',
      title: 'Lunch',
      body: 'Going to eat a cheeseburger',
      category: 'time',
      start: '2023-03-01T12:00:00',
      end: '2023-03-01T13:30:00',
      state: null,
      attendees: null,
      isPrivate: false,
      backgroundColor: "#1976d2",
      color: "white"
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


 export default function schedule(props){
   return (
    <div>
      <Calendar
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
    </div>
  );
}
