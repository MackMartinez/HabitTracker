import React from "react"
import HabitBG from '../Images/HabitBG.jpg';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Button, createTheme, ThemeProvider } from '@mui/material'
import GetStartedButton from "../Components/GetStartedButton";
import { useNavigate } from "react-router-dom"
import logo_title from '../Images/logo_title.png'


const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h2",
          },
          style: {
            fontSize: "2.4rem",
            fontWeight: "700",
            marginBottom: "10px",
            marginTop: '-225px'
          }
        },
        {
          props: {
            variant: "h4",
          },
          style: {
            fontSize: "1.7rem",
            marginBottom: "10px"
          }
        }
      ]
    },
  }
})

export default function HomeLandingPage () {

  const navigate = useNavigate()
  const navLogin = () => {
    navigate('/login', { replace: true});
  }
    
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box
          sx={{
            backgroundImage: `url(${HabitBG})`,
            backgroundSize: "cover",
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
          {/* <ButtonAppBar /> */}
          <Box 
            sx={{
              mb: "300px",
              display: 'flex',
              flexDirection: "column",
              alignItems: 'center',
            }}
            >
              <img src={logo_title} alt="Habit Logo" height={700} width={700} style={{ marginTop: '-275px' }} /> 
              <Button onClick={navLogin} sx={{bottom: 475, left: '50%' }}> Sign In </Button>
            <Typography variant="h2">Unlock your Potential, Build Long Lasting Habits </Typography>
            <Typography variant="h4">Build the best version of yourself by mastering your habits </Typography>
            <GetStartedButton />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}