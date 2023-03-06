import React from "react"
import ButtonAppBar from "../Components/Appbar";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';


export default function HomeLandingPage () {
  return (
    <>
    <ButtonAppBar />
    <img width="100%" src="https://balance.media/wp-content/uploads/2021/06/shutterstock_1240035982.jpg"></img>
    <h1>Welcome to HabTrack</h1>
    {/* Here are some of the key features of our habit tracker:

Customizable habit tracking: You can create your own habits or choose from a pre-existing list of habits to track, set reminders for yourself, and track your progress over time.

Insightful statistics: Our habit tracker provides you with insightful statistics and visualizations that help you understand your progress and identify areas for improvement. You can view trends over time and get an overview of how you're doing.

Motivational rewards: You can set rewards for yourself as you reach milestones and achieve your goals. These rewards can be anything from treating yourself to a movie night or buying that item you've been wanting.

Community support: Connect with other users on the platform who share similar goals and habits. Get inspired by their progress and share your own journey with them.

Seamless integration: Our habit tracker seamlessly integrates with other apps and platforms, so you can easily incorporate it into your daily routine.

With our habit tracker web application, developing positive habits has never been easier. Start tracking your habits today and achieve your goals one step at a time. */}
    </>
  )
}