import './App.css';
import * as React from 'react';
import ButtonAppBar from './Components/Appbar';
import Register from './Pages/Register';

import Login from './Pages/Login';
import UserLandingPage from './Pages/UserLandingPage';
import CreateHabit from './Components/CreateHabit';


function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      {/* <Login /> */}
      <UserLandingPage />
      <Register />
      <CreateHabit />
    </React.Fragment>
  );
}

export default App;
