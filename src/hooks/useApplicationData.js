import { useState, useEffect } from "react";

const useApplicationData = () => {

  
  const habits = ['Piano', 'Swimming', 'Jogging'];

  const [ state, setState ] = useState({
    title:"",
    details:"",
    startDate:"",
    endDate:"",
    startTime: "",
    endTime:"",
    days:""
  });
  
   useEffect(() => {
    setState(prev =>({
      ...prev, title: habits[0]
     }))
   },[]) 



  return {
    // console.log(state)
    state
  };
};

export default useApplicationData;