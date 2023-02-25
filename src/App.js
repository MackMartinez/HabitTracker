import './App.css';
import * as React from 'react';
import ButtonAppBar from './Components/Appbar';
import CreateHabit from './Components/CreateHabit';


function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <CreateHabit />
    </React.Fragment>
  );
}

export default App;
