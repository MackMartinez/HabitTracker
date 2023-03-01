import * as React from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';

const onClick = () => {
  console.log("New habit Created");
}
// Will need to add logic to show create habit form

export default function AddHabit() {

  return(
    <Button variant="contained" onClick={onClick}><Add/> Create Habit</Button>
    
  )
}