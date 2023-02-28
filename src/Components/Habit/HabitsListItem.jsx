import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';


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

  return(
    <ListItem>
      <ListItemButton
        selected={selectedIndex === true}
        onClick={handleListItemClick}
      >
        <ListItemText primary ={props.habitListItem}/>
      </ListItemButton>
      
      <IconButton
        onClick={onDelete}>
        <RemoveCircleIcon/> 
      </IconButton>
    </ListItem>
  )
}