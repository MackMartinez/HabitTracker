import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { List, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const theme = createTheme({
  components: {
    MuiTypography: {
      style: {
        fontSize: "3.2rem",
        fontWeight: "700",
      }
    },
  }
})

export default function HabitStatusListItem(props) {

  return(
    <ThemeProvider theme={theme}>
      <List>
          <ListItem>
            <Typography>
            </Typography>
              <ListItemText primary={props.eventTitle} />
              <ListItemText primary={props.eventCount} />
            {/* <Checkbox {...label} disabled checked /> */}
          </ListItem>
        <Divider />
      </List>
    </ThemeProvider>
    
  )
}