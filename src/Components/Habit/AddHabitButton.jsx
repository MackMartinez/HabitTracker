import * as React from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';


export default function AddHabitButton(props) {
  
  
  const handleClick = () => {
    props.setMode("CREATING")
  }

  return(
    <Button variant="contained" onClick={handleClick}><Add/> Create Habit</Button>
    
  )
}