import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  
  const [ state, setState ] = useState({
    habits: [],
    events: []
  });
  
   // Use effect to make axios call and get habit data
  useEffect(() => {
    const routes = {
      getHabits: "http://localhost:8080/habit",
      getEvents: "http://localhost:8080/habit/events"
  };

    Promise.all([
      axios.get(routes.getHabits, {
        withCredentials: true
      }),
      axios.get(routes.getEvents, {
        withCredentials: true
  })
    ]).then((all) => {
      setState(prev => ({...prev, habits: all[0].data, events: all[1].data}))
      // console.log(state.events)
    });
  },[])

  

  return {
    state, setState
  };
};