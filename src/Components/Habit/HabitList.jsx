import React from "react";
import HabitListItem from "./HabitsListItem";
import useApplicationData from "../../hooks/useApplicationData";

//Initial code to map over data
// let habitsList = state.map((habit, index) => {
//   return(
//     <HabitListItem key ={index} habitListItem={state.title}/>
//     )
//   });
  
export default function HabitList() {

  const {
    state
  } = useApplicationData();

  let habits = state.habits.map((habit, index) => {
    return(
      <HabitListItem key={index} habitListItem={habit.title}/>
    )
  });

  return(
    <div>
      {habits}
    </div>
  )
}