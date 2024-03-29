import * as React from "react";
import {ListItem, ListItemButton, ListItemText, IconButton} from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { red } from "@mui/material/colors";
import moment from "moment";

export default function HabitListItem(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(false);

  const handleListItemClick = () => {
    if (selectedIndex === false) {
      setSelectedIndex(true);
    } else {
      setSelectedIndex(false);
    }
  };

  const onDelete = () => {
    console.log("Delete Habit");
  };

  let eventDetails = props.upcoming ? `Started ${moment(`${props.habit.start_date}T${props.habit.start_time}`).format('MMMM Do')}`: `Ended ${moment(`${props.habit.end_date}T${props.habit.end_time}`).format('MMMM Do')}` ;

  return (
    <ListItem>
      <ListItemButton
        selected={selectedIndex === true}
        onClick={handleListItemClick}
      >
        <ListItemText primary={props.habit.title} secondary={eventDetails} />
      </ListItemButton>
      
    </ListItem>
  );
}
