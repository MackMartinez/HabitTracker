import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddHabit from './AddHabit';
import HabitList from './HabitList';



export default function BasicCard() {
  return (
    <>
      <Card>
        <CardContent>
         <HabitList/>
        </CardContent>
        <CardActions>
          <AddHabit/>
        </CardActions>
      </Card>
    </>
  );
}

