import './App.css';
import * as React from 'react';
import ButtonAppBar from './Components/Appbar';
import Login from './Pages/Login';
import UserLandingPage from './Pages/UserLandingPage';


function App() {
  return (
    <React.Fragment>
      {/* <ButtonAppBar /> */}
      <Login />
      {/* <UserLandingPage /> */}
    </React.Fragment>
  );
}

export default App;
