import React from "react";
import HabitListItem from "./HabitsListItem";
import useApplicationdata from "../../hooks/useApplicationData";

//Initial code to map over data
// let habitsList = state.map((habit, index) => {
//   return(
//     <HabitListItem key ={index} habitListItem={state.title}/>
//     )
//   });
  
export default function HabitList() {

  const {state} = useApplicationdata()

  return(
    <div>
      {/* {habitList} */}
      <HabitListItem key ="1" habitListItem={state.title}/>
    </div>
  )
}