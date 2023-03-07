import './App.css';
import React from 'react';
import Register from './Pages/Register';
import Login from './Pages/Login';
import UserLandingPage from './Pages/UserLandingPage';
import HabitPageLayout from './Pages/Habits';
import CreateHabit from './Components/Habit/CreateHabit';
import PersistLogin from './Components/PersistLogin';

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      {/* This should be /:user to render specific user logged in  */}
      <Route element={<PersistLogin/>}>
        <Route path="/user" element={<UserLandingPage/>}/>
        <Route path="/user/habit" element={<HabitPageLayout/>}/>
        <Route path="/user/habit/create" element={<CreateHabit/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
