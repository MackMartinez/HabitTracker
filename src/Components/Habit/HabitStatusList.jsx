import React from "react";
import HabitStatusListItem from "./HabitStatusListItem";

export function CompleteHabitList(props) {
  let completeHabitsList = props.habits
    .filter((habit) => habit.completedCount > 0)
    .map((habit, index) => {
      return (
        <HabitStatusListItem
          key={index}
          eventTitle={habit.title}
          eventCount={habit.completedCount}
        />
      );
    });

  return <div>{completeHabitsList}</div>;
}
export function IncompleteHabitList(props) {
  let incompleteHabitsList = props.habits
    .filter((habit) => habit.incompletedCount > 0)
    .map((habit, index) => {
      return (
        <HabitStatusListItem
          key={index}
          eventTitle={habit.title}
          eventCount={habit.incompletedCount}
        />
      );
    });

  return <div>{incompleteHabitsList}</div>;
}
