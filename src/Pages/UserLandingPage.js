import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import themeTest from '../Styles/Theme';

import { createTheme, ThemeProvider } from "@mui/material"



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UserLandingPage() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <ThemeProvider theme={themeTest}>
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
        <Button variant="contained" >Create Habit</Button>
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={2}>
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
      <Grid item xs={2}>
        <Item style={{minHeight: "2000px", backgroundColor: "inherit"}}>
          Habit Summary
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item style={{minHeight: "2000px"}}>
          Calendar
        </Item>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}