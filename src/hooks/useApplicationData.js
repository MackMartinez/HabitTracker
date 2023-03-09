import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  
  const [ state, setState ] = useState({
    habits: [
      {
        "id": 2,
        "unique_event_id": "running20230309",
        "title": "Running",
        "body": "I want to run 3 times per week",
        "start_date": "2023-03-09",
        "end_date": "2023-03-28",
        "start_time": "7:00",
        "end_time": "8:00",
        "days": "Monday,Wednesday",
        "user_id": 2,
        "completed": false
      },
      {
        "id": 3,
        "unique_event_id": "coding20230309",
        "title": "Coding",
        "body": " Practicing everyday to be a great developer",
        "start_date": "2023-03-09",
        "end_date": "2023-03-28",
        "start_time": "18:00",
        "end_time": "22:00",
        "days": "Monday,Tuesday",
        "user_id": 1,
        "completed": false
      },
      {
        "id": 4,
        "unique_event_id": "coding20230319",
        "title": "Coding",
        "body": " Practicing everyday to be a great developer",
        "start_date": "2023-03-09",
        "end_date": "2023-03-28",
        "start_time": "23:00",
        "end_time": "24:00",
        "days": "Thursday,Friday",
        "user_id": 3,
        "completed": false
      }
    ]
  });
  


   // Use effect to make axios call and get habit data
  //  useEffect(() => {
  //   const routes = {
  //     getHabits: "/habit",
  //     getUsers: "/user"
  //   }

  //   Promise.all([
  //     axios.get(routes.getHabits)
  //     // axios.get(rouse)
  //   ]).then((all) => {
  //     setState(prev => ({...prev, habits: all[0].data}))
  //     console.log(all[0].data)
  //   });

  // },[])

  return {
    // console.log(state)
    state
  };
};