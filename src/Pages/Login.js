import React, { useRef, useState, useEffect, useCallback } from "react";
import { Grid, Paper, Avatar, TextField, Checkbox, FormGroup, FormControlLabel, Button, Typography, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Yoga from '../Images/Yoga.jpg';

const LOGIN_URL = '/login'; 

export default function Login(props) {
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const navRegister = () => {
    navigate("/register");
  };

  const location = useLocation();
  const from = location.state?.from?.pathname || "/user";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false); 

  const [isRedirecting, setIsRedirecting] = useState(true);

  toast.configure();
  const handleSuccess = useCallback(() => {
    toast.success("Successful Login!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: true,
      pauseOnFocusLoss: false
    });
  }, []);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       const response = await axios.post(
        LOGIN_URL, 
        JSON.stringify({user, pwd}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true 
        }
      );
    const accessToken = response?.data?.accessToken;
    const userId = response.data.id;
    const avatar = response.data.avatar;
    setAuth({ user, accessToken, userId, avatar});
    setUser("");
    setPwd("");
    setSuccess(true);
    handleSuccess();
    props.setState(prev=>({...prev}));
    setTimeout(() => {
      setIsRedirecting(false);
      navigate(from, { replace: true });
    }, 1000)
    } catch (err) {
      if(!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
     
  };

  const togglePersist = () => {
    setPersist(prev => !prev);
  }

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist])


  const paperStyle = {
    padding: 20,
    height: "auto",
    width: "50vh"
  };

  const avatarStyle = { backgroundColor: "#007bff" };

  const textStyle = { margin: "8px 0px" };

  return (
    <>
      {success ? (
        <Box mt={50} sx={{ display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column", alignContent: 'center'}}>
        <CircularProgress size={120}/>
          </Box>
      ) : (
        <Grid>
          <Box sx={{display: 'flex', flexWrap: 'wrap', margin: "200px auto", justifyContent: "center", '& > :not(style)': {
          m: 0}}}>
          <Paper elevation={10} style={paperStyle} sx={{backgroundImage: `url(${Yoga})`,
            backgroundSize: "cover"}}></Paper>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Login</h2>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <FormGroup onSubmit={handleSubmit}>
                <TextField
                  id="username"
                  label="Username"
                  variant="outlined"
                  placeholder="Username"
                  style={textStyle}
                  ref={userRef}
                  onChange={(e) => setUser(e.target.value)}
                  value={user} // add to register form to clear inputs upon login
                />
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  //Must be 6 characters minimum
                  placeholder="xxxxxx"
                  style={textStyle}
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                />
                <FormControlLabel id="persist" control={<Checkbox />} label="Remember Me" onChange={togglePersist} checked={persist}/>{" "} {/*Lookup how to use*/}
                <Button type="submit" onClick={handleSubmit} color="primary" variant="contained">
                  Sign In
                </Button>
                {/*forgot password?*/}
                <p>
                  Need an Account?
                  <br />
                  <span className="line">
                    {/*put router link here*/}
                    <Link onClick={navRegister}>Sign Up</Link>
                  </span>
                </p>
              </FormGroup>
            </Grid>
          </Paper>
          </Box>
        </Grid>
      )}
    </>
  );
}
