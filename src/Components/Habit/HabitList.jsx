import React from "react";
import HabitListItem from "./HabitsListItem";
import useApplicationData from "../../hooks/useApplicationData";
import moment from "moment";

  
export default function HabitList(props) {

  const {
    state
  } = useApplicationData();

  let pastHabits = state.habits.filter((habit) => moment(props.date,'YYYY-MM-DDTHH:mm:ss').diff(moment(habit.start_date,'YYYY-MM-DDTHH:mm:ss'), 'days') >= 0).map((habit, index) => {
    return(
      <HabitListItem key={index} habit={habit}/>
    )
  });

  let futureHabits = state.habits.filter((habit) => moment(props.date,'YYYY-MM-DDTHH:mm:ss').diff(moment(habit.start_date,'YYYY-MM-DDTHH:mm:ss'), 'days') <= 0).map((habit, index) => {
    return(
      <HabitListItem key={index} habit={habit}/>
    )
  });

  return(
    <div>
      {props.upcoming ? futureHabits : pastHabits}
    </div>
  )
}