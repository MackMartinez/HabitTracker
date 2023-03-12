import React from "react";
import HabitStatusListItem from "./HabitStatusListItem";


export function CompleteHabitList(props) {

  let completeHabitsList = props.events.filter((event) => event.completed).map((event, index) => {
    return(
       <HabitStatusListItem key ={index} habitStatusListItem={event.habit_id}/>
      )
    }); 

  return(
    <div>
      {completeHabitsList}
    </div>
  )
};
export function IncompleteHabitList(props) {

  let incompleteHabitsList = props.events.filter((event) => !event.completed).map((event, index) => {
    return(
       <HabitStatusListItem key ={index} habitStatusListItem={event.habit_id}/>
      )
    }); 

  return(
    <div>
      {incompleteHabitsList}
    </div>
  )
};

