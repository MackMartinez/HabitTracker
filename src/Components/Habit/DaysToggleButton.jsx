import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { Typography } from '@mui/material';

export default function DaysToggleButtons() {
  const [daySelected, setDaySelected] = useState([]);

  const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const handleChange = (event,day) => {
    setDaySelected(day);
  };

  const eachDayButton = daysArray.map(day => {
    return(
      <ToggleButton
        value={day}
      >
        <Typography> {day} </Typography>
      </ToggleButton>
    ) 
  })
  
  return (
    <div id="togglebutton">
      <ToggleButtonGroup
        color="primary"
        value={daySelected}
        onChange={handleChange}
        aria-label="Platform"
      >
        {eachDayButton}
      </ToggleButtonGroup>
    </div>
  )
}