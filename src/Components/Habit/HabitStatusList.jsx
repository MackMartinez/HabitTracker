import React from "react";
import HabitStatusListItem from "./HabitStatusListItem";


export function CompleteHabitList(props) {

  let completeHabitsList = props.habits.filter((habit) => habit.completed).map((habit, index) => {
    return(
       <HabitStatusListItem key ={index} habitStatusListItem={habit.title}/>
      )
    }); 

  return(
    <div>
      {completeHabitsList}
    </div>
  )
};
export function IncompleteHabitList(props) {

  let incompleteHabitsList = props.habits.filter((habit) => !habit.completed).map((habit, index) => {
    return(
       <HabitStatusListItem key ={index} habitStatusListItem={habit.title}/>
      )
    }); 

  return(
    <div>
      {incompleteHabitsList}
    </div>
  )
};

