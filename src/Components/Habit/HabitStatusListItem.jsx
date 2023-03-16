import * as React from "react";
import {ListItem,ListItemText, Divider, List, Typography, createTheme, ThemeProvider} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const theme = createTheme({
  components: {
    MuiTypography: {
      style: {
        fontSize: "3.2rem",
        fontWeight: "700",
      },
    },
  },
});

export default function HabitStatusListItem(props) {
  return (
    <ThemeProvider theme={theme}>
      <List>
        <ListItem>
          <Typography></Typography>
          <ListItemText primary={props.eventTitle} />
          <ListItemText primary={props.eventCount} />
          {/* <Checkbox {...label} disabled checked /> */}
        </ListItem>
        <Divider />
      </List>
    </ThemeProvider>
  );
}
