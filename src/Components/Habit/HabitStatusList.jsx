import React from "react";
import HabitStatusListItem from "./HabitStatusListItem";

const completeHabits = ['Piano', 'Swimming'];

const incompleteHabits = ['Jogging'];

let completeHabitsList = completeHabits.map((habit, index) => {

  return(
    <HabitStatusListItem key ={index} habitStatusListItem={habit}/>
  )
});

let incompleteHabitsList = incompleteHabits.map((habit, index) => {

  return(
    <HabitStatusListItem key ={index} habitStatusListItem={habit}/>
  )
});

export function CompleteHabitList() {

  return(
    <div>
      {completeHabitsList}
    </div>
  )
}

export function IncompleteHabitList() {

  return(
    <div>
      {incompleteHabitsList}
    </div>
  )
}

