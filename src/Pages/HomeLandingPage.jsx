import React from "react";
import HabitBG from "../Images/HabitBG.jpg";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import GetStartedButton from "../Components/GetStartedButton";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h2",
          },
          style: {
            fontSize: "3.2rem",
            fontWeight: "700",
          },
        },
        {
          props: {
            variant: "h4",
          },
          style: {
            fontSize: "2.0rem",
            marginBottom: "20px",
          },
        },
      ],
    },
  },
});

export default function HomeLandingPage() {
  const navigate = useNavigate();
  const navLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            backgroundImage: `url(${HabitBG})`,
            backgroundSize: "cover",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <ButtonAppBar /> */}
          <Box
            sx={{
              mb: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <img src={HabitLogo} alt="Habit Logo" height={270} width={380}  />  */}
            <Button onClick={navLogin} sx={{ bottom: 340, left: "40%" }}>
              {" "}
              Sign In{" "}
            </Button>
            <Typography variant="h2">
              Unlock your Potential, Build Long Lasting Habits{" "}
            </Typography>
            <Typography variant="h4">
              Build the best version of yourself by mastering your habits{" "}
            </Typography>
            <GetStartedButton />
          </Box>
        </Box>
        <Box>
          <Typography> Hello </Typography>
        </Box>
      </ThemeProvider>
      {/* Here are some of the key features of our habit tracker:

Customizable habit tracking: You can create your own habits or choose from a pre-existing list of habits to track, set reminders for yourself, and track your progress over time.

Insightful statistics: Our habit tracker provides you with insightful statistics and visualizations that help you understand your progress and identify areas for improvement. You can view trends over time and get an overview of how you're doing.

Motivational rewards: You can set rewards for yourself as you reach milestones and achieve your goals. These rewards can be anything from treating yourself to a movie night or buying that item you've been wanting.

Community support: Connect with other users on the platform who share similar goals and habits. Get inspired by their progress and share your own journey with them.

Seamless integration: Our habit tracker seamlessly integrates with other apps and platforms, so you can easily incorporate it into your daily routine.

With our habit tracker web application, developing positive habits has never been easier. Start tracking your habits today and achieve your goals one step at a time. */}
    </>
  );
}
