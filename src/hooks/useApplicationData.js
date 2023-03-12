import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  
  const [ state, setState ] = useState({
    habits: [],
    events:[]
  });
  


   // Use effect to make axios call and get habit data
   useEffect(() => {
    const routes = {
      getHabits: "http://localhost:8080/habit"
    }

    Promise.all([
      axios.get(routes.getHabits)
    ]).then((all) => {
      setState(prev => ({...prev, habits: all[0].data}))
      // console.log(all[0].data)
    });

  },[state])

  return {
    // console.log(state)
    state, setState
  };
};