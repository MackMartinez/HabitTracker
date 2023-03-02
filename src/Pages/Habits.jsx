import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import HabitCard from "../Components/Habit/HabitCard";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonAppBar from '../Components/Appbar';
import Chart from '@toast-ui/chart';
import { BarChart } from '@toast-ui/chart';
import '@toast-ui/chart/dist/toastui-chart.min.css';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HabitPageLayout () {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const el = document.getElementById('chart');

  const data = {
  categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    {
      name: 'Budget',
      data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
    },
    {
      name: 'Income',
      data: [8000, 4000, 7000, 2000, 6000, 3000, 5000],
    },
  ],
};

const options = {
  chart: { width: 700, height: 400 },
};

const barChartOne = Chart.barChart({ el, data, options });
// // const chart = new BarChart({ el, data, options }); // Second way

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
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
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
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
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
        </Grid>

        <Grid container spacing ={2} sx={{ flexGrow: 1 }}>
          <Grid xs={5}>
            <HabitCard/>
          </Grid>
          <Grid xs={7}>
            <h2>Graph showing your weekly progress</h2>
            <div id='chart'></div>
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