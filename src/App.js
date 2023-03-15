import React, {useState, useEffect} from 'react';
import Register from './Pages/Register';
import Login from './Pages/Login';
import UserLandingPage from './Pages/UserLandingPage';
import HabitPageLayout from './Pages/Habits';
import CreateHabit from './Components/Habit/CreateHabit';
import HabitInfoPage from './Pages/HabitInfo';
import AboutUsPage from './Pages/AboutUs';
import PersistLogin from './Components/PersistLogin';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import HomeLandingPage from './Pages/HomeLandingPage';
import useApplicationData from './hooks/useApplicationData';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter, Routes, Route } from "react-router-dom"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []) //Create hook for this to us with onClicks
  
  // const { state, setState} = useApplicationData();  // Import data at the top level

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div height={500}>
      { loading && (
        <Box mt={50} sx={{ display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column", alignContent: 'center'}}>
      <CircularProgress size={120} />
        </Box>
      ) || (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route element={<PersistLogin/>}/>
          <Route path="/user" element={<UserLandingPage 
          // state={state} setState={setState}
          />
          }/>
          <Route path="/user/habit" element={<HabitPageLayout 
          // state={state} setState={setState}
          />}/>
          <Route path="/user/habit/create" element={<CreateHabit/>}/>
          <Route path="/habit-info" element={<HabitInfoPage/>}/>
          <Route path="/about" element={<AboutUsPage/>}/>
        </Routes>
      </BrowserRouter> 
      )}
    </div>
    </ThemeProvider>
  );
}

export default App;
