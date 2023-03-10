import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import moment from 'moment';


export default function HabitListItem(props) {

  const [selectedIndex, setSelectedIndex] = React.useState(false);

  const handleListItemClick = () => {
    if(selectedIndex === false) {
      setSelectedIndex(true);
    } else {
      setSelectedIndex(false);
    }
    
  };

  const onDelete = () => {
    console.log("Delete Habit")
  }

  let eventDetails = moment(`${props.habit.start_date}T${props.habit.start_time}`).format('MMMM Do, h:mm a');


  return(
    <ListItem>
      <ListItemButton
        selected={selectedIndex === true}
        onClick={handleListItemClick}
      >
        <ListItemText primary ={props.habit.title} secondary ={eventDetails}/>
      </ListItemButton>
      
      <IconButton
        onClick={onDelete}>
        <RemoveCircleIcon sx={{ color: red[500] }}/> 
      </IconButton>
    </ListItem>
  )
}