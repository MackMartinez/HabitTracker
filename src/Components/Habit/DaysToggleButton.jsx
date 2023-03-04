import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';

export default function DaysToggleButton() {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButton
      value="day"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}