

let weekObject = {
  "Sunday": 0,
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6
}



const generateEvents = (habit, sunday) => {

  let event = {
    title: habit.title,
    body: habit.details,
    category: "time",
    start: `${habit.startDate}T${habit.startTime}:00`,
    end: `${habit.startDate}T${habit.startTime}:00`,
    state: null,
    attendees: null,
    isPrivate: false,
    backgroundColor: "#1976d2",
    color: "white",
    daysSelected: habit.days
  }
  
  let eventsGenerated = [];

  habit.days.forEach(day => console.log (day));

  return event;

}

export { generateEvents }