import { useState, useEffect } from "react";
import axios from "axios";
import { countCompleteEvents, generateEvents } from "../helpers/events";

export default function useApplicationData() {

  
  const [ state, setState ] = useState({
    habits: [],
    events: [],
    eventsCount:[],
    selected:{},
    calendarEvents: []
  });
  
   // Use effect to make axios call and get habit data
  useEffect(() => {
    const routes = {
      getHabits: "http://localhost:8080/habit",
      getEvents: "http://localhost:8080/habit/events",
      getEventsCount: "http://localhost:8080/habit/events/count"
  };

    Promise.all([
      axios.get(routes.getHabits, {
        withCredentials: true
      }),
      axios.get(routes.getEvents, {
        withCredentials: true
      }),
      axios.get(routes.getEventsCount, {
        withCredentials: true
      })
    ]).then((all) => {
      let eventsArray = all[0].data.map((habit) => generateEvents(habit));
      let calendarEvents = eventsArray.flat();
      let updatedHabits = countCompleteEvents (all[0].data, calendarEvents);
      console.log("calendar events", calendarEvents)
      setState(prev => ({...prev, habits: updatedHabits, events: all[1].data, eventsCount: all[2].data, selected: all[0].data[0], calendarEvents: calendarEvents}));
    });
  },[])


  return {
    state, setState
  };
};