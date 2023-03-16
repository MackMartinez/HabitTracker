import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import HabitCard from "../Components/Habit/HabitCard";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonAppBar from '../Components/Appbar';
import useApplicationData from '../hooks/useApplicationData';
import {CompleteHabitList, IncompleteHabitList} from '../Components/Habit/HabitStatusList';
import RadialBar from '../Components/Gauge/StrokedGauge';
import '@toast-ui/chart/dist/toastui-chart.min.css';
import { BarChart, LineChart } from '@toast-ui/react-chart';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import EditHabit from "../Components/Habit/EditHabit";
import TextureBG from '../Images/TextureBG.jpg';


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
  const { state, setState} = useApplicationData();
  
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [editMode, setEditMode] = useState(false);

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
        width: 1220,
        height: 517,
        backgroundColor: 'black',
        title: selectedValue === "Line" ? 'Amount of Habits Completed per Month': 'Amount of Habits Completed per Month' ,
      },
      yAxis: {
        title: selectedValue === "Line" ? 'Amount':'Month',
      },
      xAxis: {
        title: selectedValue === "Line" ? 'Month':'Amount',
      },
    
  };

  const showChartPeriod = () => {
    if (selectedValue === 'Line') {
      return <LineChart data={dataLineChart} options={options}/>
    }
    return <BarChart data={dataBarChart} options={options} />
  }
  
  return(
        <Grid  
          container 
          rowSpacing={2}
          columnSpacing={3}
          sx={{pt:12, paddingLeft:25, paddingRight:25, pb:20, 
          backgroundSize:"cover", height:'100%'}}
        >
        <ButtonAppBar/>
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

        <Grid container spacing ={2} sx={{ flexGrow: 1 }}>
          <Grid xs={5}>
            {editMode === false && <HabitCard state={state} setState={setState} setEditMode={setEditMode}/>}
            {editMode === true && <EditHabit selectedHabit={state.selected} setEditMode={setEditMode} state={state} setState={setState}/>}
          </Grid>
          <Grid xs={7}>
            {/* <Item style={{maxHeight: "500px", backgroundColor: "inherit"}}> */}
              {showChartPeriod()}
            {/* </Item> */}
          </Grid>

        </Grid>
        <Grid 
          container 
          spacing ={2}
          width={"100%"}>
          <Grid xs={12} >
            <Typography variant="h4" style={{backgroundColor:"#1976d2", color:"#fff", textAlign:"center", paddingTop: 10, paddingBottom: 10}}>Your Stat Summary</Typography>
          </Grid>
          <Grid xs={4}>
            <Dashboard>
              <h3>Amount of Completed Habit Events</h3>
              <CompleteHabitList eventsCount={state.eventsCount} habits={state.habits}/>
            </Dashboard>
          </Grid>
          <Grid xs={4}>
            <Dashboard>
              <h3>Amount of Incompleted Habit Events</h3>
              <IncompleteHabitList eventsCount={state.eventsCount} habits={state.habits}/>
            </Dashboard>
          </Grid>
          <Grid xs={4}>
            <Dashboard>
              <h3>Habit Progress</h3>
              <RadialBar state={state}/>
            </Dashboard>
          </Grid>  
        </Grid>
      </Grid>
  ) 

} 