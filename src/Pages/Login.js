import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useRef, useState, useEffect } from "react";

export default function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false); //use this to route to /user upon successful submission

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: "50vh",
    margin: "70px auto",
  };

  const avatarStyle = { backgroundColor: "blue" };

  const textStyle = { margin: "8px 0px" };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            {/*Should automatically reroute to /user using react router*/}
            <a href="/user">Go to Home</a>
          </p>
        </section>
      ) : (
        <Grid>
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
                  label="Email"
                  variant="outlined"
                  placeholder="user@email.com"
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
                <FormControlLabel control={<Checkbox />} label="Remember Me" />{" "} {/*Lookup how to use*/}
                <Button type="submit" onClick={handleSubmit} color="primary" variant="contained">
                  Sign In
                </Button>
                {/*forgot password?*/}
                <p>
                  Need an Account?
                  <br />
                  <span className="line">
                    {/*put router link here*/}
                    <a href="/register">Sign Up</a>
                  </span>
                </p>
              </FormGroup>
            </Grid>
          </Paper>
        </Grid>
      )}
    </>
  );
}
