import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import ButtonAppBar from '../Components/Appbar';
import AddHabitButton from '../Components/Habit/AddHabitButton';
import Schedule from '../Components/Calendar/index'
import HabitList from '../Components/Habit/HabitList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UserLandingPage() {
  const [calendarView, setCalendarView] = React.useState('week');

  const handleChange = (event) => {
    setCalendarView(event.target.value);
  };

  return (
    <>
    <ButtonAppBar />
    <Grid 
      container 
      rowSpacing={2}
      columnSpacing={3}
      pt={12}
      >
      <Grid item xs={2}>
        <Item>Current Date</Item>
      </Grid>
      <Grid item xs={2}>
        <AddHabitButton />
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={2}>
        <Item>  
          <FormControlLabel
            value="start"
            control={
              <Radio
              checked={calendarView === 'week'}
              onChange={handleChange}
              value="week"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 15
                }}}
                />
              }
              label="Week"
              labelPlacement="top"
              />
          <FormControlLabel
            value="start"
            control={
              <Radio
              checked={calendarView === 'month'}
              onChange={handleChange}
              value="month"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'B' }}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 15
                }}}
                />
              }
              label="Month"
              labelPlacement="top"
              />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item style={{minHeight: "2000px", backgroundColor: "inherit"}}>
          Habit Summary
          <HabitList/>
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item>
          Calendar
          <Grid>
            <Schedule view={calendarView}/>
          </Grid>
        </Item>
      </Grid>
    </Grid>
  </>
  );
}