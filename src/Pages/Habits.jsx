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
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Dashboard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '350px'
}));

/* 
  We should have 2 data queries ready for when we select week or month.
  
*/

const dataBarChart = {
  categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  series: [
    {
      //Call from API
      name: 'Coding',
      data: [1, 0, 1, 1, 1, 0, 1],
    },
    {
      //Call from API
      name: 'Shooting',
      data: [1, 0, 1, 1, 1, 0, 1],
    },
  ],
};

const dataLineChart = {
  categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  series: [
    {
      //Call from API
      name: 'Coding',
      data: [20, 10, 15, 20, 10, 18],
    },
    {
      //Call from API
      name: 'Shooting',
      data: [10, 13, 16, 14, 18, 25],
    },
  ],
};

export default function HabitPageLayout (props) {


  const [selectedValue, setSelectedValue] = React.useState('week');

  const options = {
    chart: {
      width: 800,
      height: 500,
      title: selectedValue === "week" ? '# of times habit completed per week': '# of times habit completed per month' ,
    },
    yAxis: {
      title: selectedValue === "week" ? 'Hours':'Month',
    },
    xAxis: {
      title: "week" ? 'Day':'Amount',
    },
  };
  
  const containerStyle = {
    width: '600px',
    height: '600px',
  };


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const showChartPeriod = () => {
    if (selectedValue === 'week') {
      return <LineChart data={dataLineChart} options={options} style={containerStyle}/> // What is the style tag doing?
    }
    return <BarChart data={dataBarChart} options={options} style={containerStyle} />
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
          <Typography variant="h4">Your Habits</Typography>
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
          <Grid xs={6}>
            <HabitCard state={props.state} setState={props.setState}/>
          </Grid>
          <Grid xs={6}>
            <Item style={{maxHeight: "500px", maxWidth: "800px" , backgroundColor: "inherit"}}>
              {showChartPeriod()}
            </Item>
          </Grid>

        </Grid>
        <Grid container spacing ={2}>
          <Grid xs={12}>
          <Typography variant="h4" style={{backgroundColor:"#1976d2", color:"#fff"}}>Your Stats</Typography>
          </Grid>
          <Grid xs={4}>
            <Dashboard>
              <h3>Amount of Completed Habit Events</h3>
              <CompleteHabitList eventsCount={props.state.eventsCount}/>
            </Dashboard>
          </Grid>
          <Grid xs={4}>
            <Dashboard>
              <h3>Amount of Incompleted Habit Events</h3>
              <IncompleteHabitList eventsCount={props.state.eventsCount}/>
            </Dashboard>
          </Grid>
          <Grid xs={4}>
            <Dashboard>
              <h3>Habit Progress</h3>
              <RadialBar/>
            </Dashboard>
          </Grid>  
        </Grid>
    </>
  ) 

} 