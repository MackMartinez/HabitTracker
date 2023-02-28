import React from "react"
import { createTheme, ThemeProvider } from "@mui/material"

const themeTest = createTheme ({
  components: {
    //select MUI Component to change style in this case its the button
    MuiButton: {
      variants: [
        {
          props:{
            //this is the variant of the button, found on documentation
            variant: "contained"
          },
          //here you change what styles apply
          style: {
            fontSize: 20,
            backgroundColor: "red"
          }
        }
      ]
    }
  }
})

export default themeTest;