import './App.css';
import * as React from 'react';
import ButtonAppBar from './Components/Appbar';
import Register from './Pages/Register';



function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <Register />
    </React.Fragment>
  );
}

export default App;
