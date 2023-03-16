import React from "react";
import ButtonAppBar from "../Components/Appbar";
import { Grid } from "@mui/material";

export default function HabitInfoPage() {
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
          Maintaining good habits is crucial for achieving success and living a
          healthy and fulfilling life. Good habits help us to be more
          productive, manage our time better, and reduce stress and anxiety.
          When we consistently practice healthy habits, we build momentum and
          create positive momentum in our lives. Over time, these small changes
          can lead to significant improvements in our physical and mental
          health, relationships, and overall well-being. By cultivating good
          habits, we also develop discipline, resilience, and a sense of
          accomplishment that can boost our confidence and motivation. Whether
          it's exercising regularly, eating a balanced diet, or practicing
          mindfulness, forming positive habits can have a transformative effect
          on our lives, helping us to achieve our goals and become the best
          version of ourselves.
        </p>
      </Grid>
    </>
  );
}
