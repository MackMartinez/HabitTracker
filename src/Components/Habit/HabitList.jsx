import React from "react";
import HabitListItem from "./HabitsListItem";
import moment from "moment";

  
export default function HabitList(props) {


  let pastHabits = props.state.habits.filter((habit) => moment(props.date,'YYYY-MM-DDTHH:mm:ss').diff(moment(habit.end_date,'YYYY-MM-DDTHH:mm:ss'), 'days') >= 0).map((habit, index) => {
    return(
      <HabitListItem key={index} habit={habit} upcoming={props.upcoming}/>
    )
  });

  let futureHabits = props.state.habits.filter((habit) => moment(props.date,'YYYY-MM-DDTHH:mm:ss').diff(moment(habit.end_date,'YYYY-MM-DDTHH:mm:ss'), 'days') <= 0).map((habit, index) => {
    return(
      <HabitListItem key={index} habit={habit} upcoming={props.upcoming}/>
    )
  });
  let allHabits = props.state.habits.map((habit, index) => {
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