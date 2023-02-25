import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function CreateHabit () {

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  return (
    <Grid 
      container 
      rowSpacing={2}
      columnSpacing={3}
      pt={12}
    >
      <Grid item xs={2}>
        <Item>Current Date</Item>
      </Grid>
      <Grid container item xs={10} direction="column" alignItems="center">
        <h1>Create your habit here!</h1>
      </Grid>
      <Grid item xs={2}>
        <Item style={{minHeight: "1000px", backgroundColor: "inherit"}}>
          Habit Summary
        </Item>
      </Grid>
      <Grid item xs={5}>
        <Item style={{minHeight: "1000px"}}>
          <h2>Pros</h2>
        </Item>
      </Grid>
      <Grid item xs={5}>
        <Item style={{minHeight: "1000px"}}>
          <h2>Cons</h2>
        </Item>
      </Grid>
    </Grid>
  )
}