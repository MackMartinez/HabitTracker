import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { List } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function HabitStatusListItem(props) {

  return(
    <List>
        <ListItem>
          <ListItemText primary ={props.habitStatusListItem}/>
          <Checkbox {...label} disabled checked />
        </ListItem>
      <Divider />
    </List>
    
  )
}