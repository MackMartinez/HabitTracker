import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import HabitCard from "../Components/Habit/HabitCard";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonAppBar from '../Components/Appbar';

import {CompleteHabitList, IncompleteHabitList} from '../Components/Habit/HabitStatusList';
import RadialBar from '../Components/Gauge/StrokedGauge';
import '@toast-ui/chart/dist/toastui-chart.min.css';
import { BarChart, LineChart } from '@toast-ui/react-chart';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

/* 
  We should have 2 data queries ready for when we select week or month.
  
*/

const data = {
  categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
  series: [
    {
      //Call from API
      name: 'Flying',
      data: [20, 10, 15, 20, 10, 18],
    },
    {
      //Call from API
      name: 'Strength building',
      data: [10, 13, 16, 14, 18, 25],
    },
  ],
};

const dataWeek = {
  categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  series: [
    {
      //Call from API
      name: 'Flying',
      data: [20, 10, 15, 20, 10, 18],
    },
    {
      //Call from API
      name: 'Strength building',
      data: [10, 13, 16, 14, 18, 25],
    },
  ],
};

const options = {
  chart: {
    width: 1000,
    height: 600,
    title: '# of times habit completed per month',
  },
  yAxis: {
    title: 'Month',
  },
  xAxis: {
    title: 'Amount',
  },
};

const containerStyle = {
  width: '600px',
  height: '600px',
};


export default function HabitPageLayout () {

  const [selectedValue, setSelectedValue] = React.useState('week');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const showChartPeriod = () => {
    if (selectedValue === 'week') {
      return <LineChart data={dataWeek} options={options} style={containerStyle}/>
    }
    return <BarChart data={data} options={options} style={containerStyle} />
  }

  return(
      <>
        <ButtonAppBar/>
        <Grid  
         container 
         rowSpacing={2}
         columnSpacing={3}
         pt={12}
        >
          <Grid xs={10}>
            <h1>Your Habits</h1>
          </Grid>
          <Grid xs={2}>
            <Item>  
              <FormControlLabel
                value="start"
                control={
                  <Radio
                  checked={selectedValue === 'week'}
                  onChange={handleChange}
                  value="week"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'A' }}
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 12
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
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'B' }}
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 12
                    }}}
                  />
                  }
                  label="Month"
                  labelPlacement="top"
                  />
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing ={2} sx={{ flexGrow: 1 }}>
          <Grid xs={5}>
            <HabitCard/>
          </Grid>
          <Grid xs={7}>
            {showChartPeriod()}
          </Grid>

        </Grid>
        <Grid container spacing ={2}>
          <Grid xs={12}>
            <h1>Your Stats</h1>
          </Grid>
          <Grid xs={3}>
            <h3>Completed Habits</h3>
              <CompleteHabitList/>
          </Grid>
          <Grid xs={3}>
            <h3>Incomplete Habits</h3>
              <IncompleteHabitList/>
          </Grid>
          <Grid xs={3}>
            <h3>Week Completion</h3>
              <RadialBar/>
          </Grid>
          <Grid xs={3}>
            <h3>Goals</h3>
          </Grid>   
        </Grid>
    </>
  ) 

} 