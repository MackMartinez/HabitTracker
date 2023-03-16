import React from "react";
import ButtonAppBar from "../Components/Appbar";
import { Grid } from "@mui/material";

export default function AboutUsPage() {
  return (
    <>
      <ButtonAppBar />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={3}
        pt={12}
        marginLeft={1}
        marginRight={7}
      >
        <p>
          Welcome to our Habit Tracking app! We know that developing good habits
          is key to achieving success and reaching our goals. Whether it's
          starting a fitness routine, learning a new skill, or simply drinking
          more water each day, forming healthy habits can have a big impact on
          our lives. That's why we created this app - to help you track your
          progress and stay motivated as you work towards building positive
          habits that will enhance your well-being and lead to a more fulfilling
          life. With our easy-to-use interface, you can create custom habits and
          set achievable goals. Our app also offers a range of useful features,
          including reminders, progress tracking, and insights into your habit
          formation patterns. Whether you're an experienced habit tracker or new
          to the practice, our app is designed to support you every step of the
          way. We believe that with the right tools and mindset, anyone can
          create positive change in their lives. So what are you waiting for?
          Download our Habit Tracking app today and start taking small steps
          towards big improvements in your daily routine.
        </p>
      </Grid>
    </>
  );
}
