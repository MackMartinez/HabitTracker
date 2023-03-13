import moment from "moment";

let weekObject = {
  "Sunday": 7,
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6
}

const dateGenerator = (startDate, startTime, endDate, endTime, days, habit) => {
  let startDateName = moment(startDate, 'YYYY-MM-DDTHH:mm:ss').format('dddd')
  let startDateNum = weekObject[startDateName];
  let repeatDaysArray = days.split(",")

  let generatedEvents = [];

  // Template event object to be created
  let event = {
    habit_id: habit.id,   // DB
    unique_event_id: habit.unique_event_id, // DB
    title: habit.title,  // DB
    body: habit.body, // DB
    category: "time",
    start: habit.start_date, // DB
    end: habit.start_date, // DB
    // state: null,
    // attendees: null,
    // isPrivate: false,
    backgroundColor: "#1976d2",
    color: "white",
    daysSelected: habit.days,
    completed: false, // DB
    user_id: habit.user_id
  }

  // Calculate the days
  let repeatDates = repeatDaysArray.map((day) => {
    // if (startDateNum < weekObject[day]) {
      let num = weekObject[day] === startDateNum ? 0 : weekObject[day] - startDateNum;
      // console.log(weekObject[day])
      return moment(startDate,'YYYY-MM-DDTHH:mm:ss').add(num, "days")
    // }  
});

  let duration = Math.round((moment(endDate,'YYYY-MM-DDTHH:mm:ss').diff(moment(startDate,'YYYY-MM-DDTHH:mm:ss'), 'day')/7));

  for (let i = 0; i <=duration; i++) {

    // Generate events
    const randomEventId = () => {
      return Math.floor(Math.random() * 10000)
    };


    repeatDates.forEach((date) => {
      let newStartDate = (moment(date,'YYYY-MM-DDTHH:mm:ss').add(7 * i, "days").add(startTime,"time").format('YYYY-MM-DDTHH:mm:ss'));
      let newEndDate = (moment(date,'YYYY-MM-DDTHH:mm:ss').add(7 * i, "days").add(endTime,"time").format('YYYY-MM-DDTHH:mm:ss'));
      let updatedEvent = {...event, unique_event_id: randomEventId(), start: newStartDate, end: newEndDate};
      generatedEvents.push(updatedEvent);
    })
  }
  
  return generatedEvents;
};



const generateEvents = (habit) => { // Use sunday as the reference point to change the day
  
  console.log(habit)
  
  // console.log(dateGenerator(habit.start_date, habit.start_time, habit.end_date, habit.end_time, habit.days, habit))
  return dateGenerator(habit.start_date, habit.start_time, habit.end_date, habit.end_time, habit.days, habit).filter((item) => (item.start >= habit.start_date && item.end <= habit.end_date));
  
}

export { generateEvents }