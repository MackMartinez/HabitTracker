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


const addDays = (start_date, end_date, num) => { // Adds days to the date passed in
  // Event Start
  let eventStart = moment(start_date);
  console.log("event start before add days", eventStart)
  let eventStartResult = eventStart.add(num, "days");
  // Event End
  let eventEnd = moment(end_date);
  let eventEndResult = eventEnd.add(num, "days");

  console.log("new date", eventStartResult.format('YYYY-MM-DDTHH:mm:ss'))

  return [eventStartResult.format('YYYY-MM-DDTHH:mm:ss'), eventEndResult.format('YYYY-MM-DDTHH:mm:ss')];
}


const generateEvents = (habit, sunday) => { // Use sunday as the reference point to change the day

  let SundayEventStart = `${sunday.d.getFullYear()}-0${sunday.d.getMonth() + 1}-0${sunday.d.getDate()}T${habit.start_time}:00`;  // Moment JS could probably format better
  let SundayEventEnd = `${sunday.d.getFullYear()}-0${sunday.d.getMonth() + 1}-0${sunday.d.getDate()}T${habit.end_time}:00`;  // Moment JS could probably format better
  // Template event object to be created

  let event = {
    habit_id: habit.id,   // DB
    unique_event_id: habit.unique_event_id, // DB
    title: habit.title,  // DB
    body: habit.body, // DB
    category: "time",
    start: habit.start_date, // DB
    end: habit.start_date, // DB
    state: null,
    attendees: null,
    isPrivate: false,
    backgroundColor: "#1976d2",
    color: "white",
    daysSelected: habit.days,
    completed: false, // DB
    user_id: ""
  }
  
  let eventsGenerated = [];

  let loopStartDate = SundayEventStart;
  let loopEndDate = SundayEventEnd;

  let duration = moment(habit.end_date).diff(moment(habit.start_date), 'weeks');

  for (let i = 0; i < duration; i ++ ) { // Weekly loop
    
    habit.days.split(",").forEach(day => {
      let [newStartDay, newEndDay] = addDays(loopStartDate, loopEndDate, weekObject[day])
      
      let updatedEvent = {...event, start: newStartDay, end: newEndDay}

      eventsGenerated.push(updatedEvent);
    });

    loopStartDate = moment(loopStartDate).add(1, "week"); // Update the starting point for each week
    loopEndDate = moment(loopEndDate).add(1,"week");
  }

  console.log("new events generated", eventsGenerated)
  return eventsGenerated.filter((item) => (item.start >= habit.start_date && item.end <= habit.end_date)); // Filter to ensure only dates within the limits are added

}

export { generateEvents }