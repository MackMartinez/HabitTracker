import moment from "moment";

let weekObject = {
  "Sunday": 0,
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6
}


const addDays = (startDate, endDate, num) => { // Adds days to the date passed in
  // Event Start
  let eventStart = moment(startDate);
  let eventStartResult = eventStart.add(num, "days");
  // Event End
  let eventEnd = moment(endDate);
  let eventEndResult = eventEnd.add(num, "days");

  console.log("date", eventEnd.format());
 
  return [eventStartResult.format(), eventEndResult.format()];
}

// const calculateDuration = (start, end) => {
//   let startDate = new Date(start);
//   let endDate = new Date(end);
//   let weeks = 4
//   return weeks;
// }


const generateEvents = (habit, sunday) => { // Use sunday as the reference point to change the day

  let SundayEventStart = `${sunday.d.getFullYear()}-0${sunday.d.getMonth() + 1}-0${sunday.d.getDate()}T${habit.startTime}:00`;  // Moment JS could probably format better
  let SundayEventEnd = `${sunday.d.getFullYear()}-0${sunday.d.getMonth() + 1}-0${sunday.d.getDate()}T${habit.endTime}:00`;  // Moment JS could probably format better
  // Template event object to be created
  let event = {
    title: habit.title,
    body: habit.details,
    category: "time",
    start: habit.startDate,
    end: habit.startDate,
    state: null,
    attendees: null,
    isPrivate: false,
    backgroundColor: "#1976d2",
    color: "white",
    daysSelected: habit.days
  }
  
  let eventsGenerated = [];

  // let duration = calculateDuration(habit.start, habit.Date)
  
  // let startDate = rangeStart;  // The day starting the range for the repeat

  // for (let i = 0; i < duration; i ++ ) {
    
    habit.days.forEach(day => {
      let [newStartDay, newEndDay] = addDays(SundayEventStart, SundayEventEnd, weekObject[day])
      
      let updatedEvent = {...event, start: newStartDay, end: newEndDay}

      // startDate = addDays(startDate, 7)
      eventsGenerated.push(updatedEvent);
    });
  // }


    console.log(eventsGenerated);
    // console.log("Sunday", rangeStart)
  return eventsGenerated;

}

export { generateEvents }