import './App.css';
import * as React from 'react';
import ButtonAppBar from './Components/Appbar';
import HabitPageLayout from './Components/Habit';


function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <HabitPageLayout/>
     
    </React.Fragment>
  );
}

export default App;
