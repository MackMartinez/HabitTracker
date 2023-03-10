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

  return [eventStartResult.format(), eventEndResult.format()];
}


const generateEvents = (habit, sunday) => { // Use sunday as the reference point to change the day

  let SundayEventStart = `${sunday.d.getFullYear()}-0${sunday.d.getMonth() + 1}-0${sunday.d.getDate()}T${habit.startTime}:00`;  // Moment JS could probably format better
  let SundayEventEnd = `${sunday.d.getFullYear()}-0${sunday.d.getMonth() + 1}-0${sunday.d.getDate()}T${habit.endTime}:00`;  // Moment JS could probably format better
  // Template event object to be created
  let event = {
    habit_id: "",   // DB
    unique_event_id: "", // DB
    title: habit.title,  // DB
    body: habit.details, // DB
    category: "time",
    start: habit.startDate, // DB
    end: habit.startDate, // DB
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

  let duration = moment(habit.endDate).diff(moment(habit.startDate), 'weeks');

  for (let i = 0; i < duration; i ++ ) { // Weekly loop
    
    habit.days.forEach(day => {
      let [newStartDay, newEndDay] = addDays(loopStartDate, loopEndDate, weekObject[day])
      
      const randomEventId = () => {
        return Math.floor(Math.random() * 10000)
      }

      let updatedEvent = {...event, unique_event_id: randomEventId(), start: newStartDay, end: newEndDay}

      eventsGenerated.push(updatedEvent);
    });

    loopStartDate = moment(loopStartDate).add(1, "week"); // Update the starting point for each week
    loopEndDate = moment(loopEndDate).add(1,"week");
  }

  return eventsGenerated.filter((item) => (item.start >= habit.startDate && item.end <= habit.endDate)); // Filter to ensure only dates within the limits are added

}

export { generateEvents }