import * as React from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom"


export default function AddHabitButton() {
  const navigate = useNavigate()
  const navCreateHabit = () => {
  
    navigate('/user/habit/create', { replace: true});
    
  }

  return(
    <Button variant="contained" onClick={navCreateHabit}><Add/> Create Habit</Button>
    
  )
}