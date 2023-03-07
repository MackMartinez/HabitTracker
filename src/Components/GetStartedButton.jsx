import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"


export default function GetStartedButton() {
  const navigate = useNavigate()
  const navRegister = () => {
    navigate('/register', { replace: true});
  }

  return(
    <Button variant="contained" onClick={navRegister}> Get Started</Button>
  )
}