import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FormGroup, TextField, ToggleButton } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

import ButtonAppBar from "./Appbar";


export default function CreateHabit () {

  const textStyle = {margin:'8px 0px'}

  const daysButtonStyle = {width: '10px', margin: '1px 20px 20px 20px'}

  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
      <Grid container item xs={10} direction="column" alignItems="center">
        <h2>What habit would you like to track?</h2>
      </Grid>
      <Grid item xs={2}>
        <Item style={{minHeight: "1000px", backgroundColor: "inherit"}}>
          Habit Summary
        </Item>
      </Grid>
      <Grid item xs={10} >
        <Item style={{minHeight: "200px"}} >
          <FormGroup>
            <TextField 
              id="outlined-basic" 
              label="Habit Name" 
              variant="outlined"
              placeholder="Example: Study Javascript" 
              style={textStyle}
            />
            <h2>Why track this habit?</h2>
            <TextField 
              id="outlined-basic" 
              label="List one reason this is important to you!" 
              variant="outlined"
              placeholder="Example: I want to be a Javascript Developer" 
              style={textStyle}
              type="text"
              />
              <h2>What days of the week do you want to perform this habit?</h2>
              <div>
                <Button type="text" className="Button" color="primary" variant="contained" style={daysButtonStyle}>
                  S
                </Button>
                <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                  M
                </Button>
                <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                  T
                </Button>
                <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                  W
                </Button>
                <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                  T
                </Button>
                <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                  F
                </Button>
                <Button type="text" color="primary" variant="contained" style={daysButtonStyle}>
                  S
                </Button>
              </div>
            <Button type="submit" color="primary" variant="contained">
              + Save Habit
            </Button>
          </FormGroup>
        </Item>
      </Grid>
    </Grid>
    </>
  )
}