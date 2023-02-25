import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import HabitCard from "./HabitCard";



export default function HabitPageLayout () {

  return(
    <>
      <h1>Your Habits</h1>
      
      <Grid container spacing ={2} sx={{ flexGrow: 1 }}>
        <Grid>
          <HabitCard/>
        </Grid>
        <Grid>
          <h2>Graph showing your weekly progress</h2>
        </Grid>

      </Grid>

    </>
  )

}