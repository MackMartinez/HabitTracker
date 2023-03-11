import React from "react";
import HabitListItem from "./HabitsListItem";
import useApplicationData from "../../hooks/useApplicationData";
import moment from "moment";

  
export default function HabitList(props) {

  const {
    state
  } = useApplicationData();

  let pastHabits = state.habits.filter((habit) => moment(props.date,'YYYY-MM-DDTHH:mm:ss').diff(moment(habit.end_date,'YYYY-MM-DDTHH:mm:ss'), 'days') >= 0).map((habit, index) => {
    return(
      <HabitListItem key={index} habit={habit} upcoming={props.upcoming}/>
    )
  });

  let futureHabits = state.habits.filter((habit) => moment(props.date,'YYYY-MM-DDTHH:mm:ss').diff(moment(habit.end_date,'YYYY-MM-DDTHH:mm:ss'), 'days') <= 0).map((habit, index) => {
    return(
      <HabitListItem key={index} habit={habit} upcoming={props.upcoming}/>
    )
  });
  let allHabits = state.habits.map((habit, index) => {
    return(
      <HabitListItem key={index} habit={habit} upcoming={props.upcoming}/>
    )
  });

  return(
    <div>
      {props.upcoming ? futureHabits : pastHabits}
      {props.allHabits ? allHabits : null}
    </div>
  )
}