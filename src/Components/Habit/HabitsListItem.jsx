import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const habits = ["piano", "running", "swimming"];

let habitComponent = habits.map((habit) => {
  return (
    <ListItemButton>
      <ListItemText primary ={habit}/>
    </ListItemButton>
  )
})

export default function HabitListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  
  return(
   <div>
     {habitComponent}
   </div>  
  )
}