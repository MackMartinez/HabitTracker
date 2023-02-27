import * as React from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';

const onClick = () => {
  console.log("New habit added");
}

export default function AddHabit() {
  return(
    <Button variant="contained" onClick={onClick}><Add/> New Habit</Button>
  )
}