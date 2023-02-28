import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import HabitCard from "../Components/Habit/HabitCard";



export default function HabitPageLayout () {

  return(
    <>
      <h1>Your Habits</h1>
      {/*Add in code to show the Week vs Month radio */}
      
      <Grid container spacing ={2} sx={{ flexGrow: 1 }}>
        <Grid xs={5}>
          <HabitCard/>
        </Grid>
        <Grid xs={7}>
          <h2>Graph showing your weekly progress</h2>
        </Grid>

      </Grid>
      <Grid container spacing ={2}>
        <Grid xs={12}>
          <h1>Your Stats</h1>
        </Grid>
        <Grid xs={3}>
          <h3>Dashbord 1</h3>
        </Grid>
        <Grid xs={3}>
          <h3> Dashboard 2</h3>
        </Grid>
        <Grid xs={3}>
          <h3>Dashbord 3</h3>
        </Grid>
        <Grid xs={3}>
          <h3> Dashboard 4</h3>
        </Grid>
      </Grid>
    </>
  )

}