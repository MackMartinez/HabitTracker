import './App.css';
import * as React from 'react';
import ButtonAppBar from './Components/Appbar';
import Habit from './Components/Habit/HabitCard'


function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <Habit/>
    </React.Fragment>
  );
}

export default App;
