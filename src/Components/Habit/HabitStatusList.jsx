import React from "react";
import HabitStatusListItem from "./HabitStatusListItem";


export function CompleteHabitList(props) {

  let completeHabitsList = props.eventsCount.filter((event) => event.completed).map((event, index) => {
    return(
       <HabitStatusListItem key ={index} eventTitle={event.title} eventCount={event.event_count}/>
      )
    }); 

  return(
    <div>
      {completeHabitsList}
    </div>
  )
};
export function IncompleteHabitList(props) {

  let incompleteHabitsList = props.eventsCount.filter((event) => !event.completed).map((event, index) => {
    return(
       <HabitStatusListItem key ={index} eventTitle={event.title} eventCount={event.event_count}/>
      )
    }); 

  return(
    <div>
      {incompleteHabitsList}
    </div>
  )
};

