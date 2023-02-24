import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UserLandingPage() {
  return (
    <Grid 
      container 
      rowSpacing={2}
      columnSpacing={3}
      pt={6}
    >
      <Grid item xs={2}>
        <Item>Current Date</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>Create!</Item>
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={2}>
        <Item>Toggle</Item>
      </Grid>
      <Grid item xs={2}>
        <Item
          style={{minHeight: "2000px", backgroundColor: "red"}}
        >
          Habit Summary
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item
          style={{minHeight: "1000px"}}
        >
          Calendar
        </Item>
      </Grid>
    </Grid>
  );
}