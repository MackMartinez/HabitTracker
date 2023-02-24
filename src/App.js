import './App.css';
import * as React from 'react';
import ButtonAppBar from './Components/Appbar';
import UserLandingPage from './Pages/UserLandingPage';


function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <UserLandingPage />
    </React.Fragment>
  );
}

export default App;
