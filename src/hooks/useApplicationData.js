import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  
  const [ state, setState ] = useState({
    habits: [],
    events: [],
    eventsCount:[],
    selected:{}
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
      setState(prev => ({...prev, habits: all[0].data, events: all[1].data, eventsCount: all[2].data, selected: all[0].data[0]}));
      console.log(all[2].data)
    });
  },[])


  return {
    state, setState, eventsCount, selected
  };
};