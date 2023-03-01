/* ES6 module in Node.js environment */
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';


export default function schedule() {
  return(
    <div>
      <Calendar view="month"/>
    </div>
  )
}