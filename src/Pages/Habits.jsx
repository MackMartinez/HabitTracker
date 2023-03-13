import React, { useState } from 'react';
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
import FormLabel from '@mui/material/FormLabel';
import EditHabit from "../Components/Habit/EditHabit";


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


export default function HabitPageLayout (props) {
  // let codingCompletedEvents = Number(props.state.eventsCount.filter((event) => event.completed)[0].event_count)
  // let exerciseCompletedEvents = Number(props.state.eventsCount.filter((event) => event.completed)[1].event_count)
  // let shootingCompletedEvents = Number(props.state.eventsCount.filter((event) => event.completed)[2].event_count)
  
  const dataBarChart = {
    categories: ['January', 'Februay', 'March'],
    series: [
      {
        name: 'Coding',
        data: [4, 5, 1],
      },
      {
        name: 'Shooting',
        data: [8, 3, 1],
      },
      {
        name: 'Exercise',
        data: [5, 6, 1],
      },
    ],
  };
  
  const dataLineChart = {
    categories: ['January', 'Februay', 'March'],
    series: [
      {
        name: 'Coding',
        data: [4, 5, 1],
      },
      {
        name: 'Shooting',
        data: [8, 3, 1],
      },
      {
        name: 'Exercise',
        data: [5, 6, 1],
      },
    ],
  };


  const [selectedValue, setSelectedValue] = React.useState('Line');

  const options = {
    chart: {
      width: 800,
      height: 500,
      title: selectedValue === "Line" ? 'Amount of Habits Completed per Month': 'Amount of Habits Completed per Month' ,
    },
    yAxis: {
      title: selectedValue === "Line" ? 'Amount':'Month',
    },
    xAxis: {
      title: selectedValue === "Line" ? 'Month':'Amount',
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
    if (selectedValue === 'Line') {
      return <LineChart data={dataLineChart} options={options} style={containerStyle}/> // What is the style tag doing?
    }
    return <BarChart data={dataBarChart} options={options} style={containerStyle} />
  }

  const [editMode, setEditMode] = useState(true);

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
            <FormLabel id="demo-row-radio-buttons-group-label">Select Chart Type</FormLabel>  
              <FormControlLabel
                value="start"
                control={
                  <Radio
                  checked={selectedValue === 'Line'}
                  onChange={handleChange}
                  value="Line"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'A' }}
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 12
                    }}}
                  />
                  }
                  label="Line"
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
                  label="Bar"
                  labelPlacement="top"
                  />
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing ={2} sx={{ flexGrow: 1 }}>
          <Grid xs={6}>
            {editMode === false && <HabitCard state={props.state} setState={props.setState} setEditMode={setEditMode}/>}
            {editMode === true && <EditHabit selectedHabit={props.state.selected} setEditMode={setEditMode}/>}
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