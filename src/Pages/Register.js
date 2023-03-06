import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormGroup,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;
const REGISTER_URL = "/register";

export default function Register() {
  const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); 

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [EmailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({firstName, lastName, user, email, pwd }),
        {
          headers: { "Content-Type": "application/json"},
          withCredentials: true //This was changed from withCredentials to work
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true); // for testing, remove when implemented
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setFirstName("");
      setLastName("");
      setEmail("");
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username or Email Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
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
          <h1>Success!</h1>
          <p>
            <a href="/login">Sign In</a> {/*should automatically reroute*/}
          </p>
        </section>
      ) : (
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Register Here</h2>
              <FormGroup onSubmit={handleSubmit}>
                <TextField
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  placeholder="John"
                  style={textStyle}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Doe"
                  style={textStyle}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  id="username"
                  label="Username"
                  variant="outlined"
                  placeholder="Username"
                  style={textStyle}
                  ref={userRef}
                  onChange={(e) => setUser(e.target.value)}
                  required
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                />

                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validName ? "valid" : "hide"}
                  />
                  {/*Could maybe try in put these beside the textbox*/}
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validName || !user ? "hide" : "invalid"}
                  />
                </span>
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>

                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  placeholder="user@email.com"
                  style={textStyle}
                  ref={emailRef}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="uidnote"
                />

                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validEmail ? "valid" : "hide"}
                  />
                  {/*Could maybe try in put these beside the textbox*/}
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validEmail || !email ? "hide" : "invalid"}
                  />
                </span>
                <p
                  id="uidnote"
                  className={
                    EmailFocus && email && !validEmail
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Must be a valid email (Follow this format: user@email.com).
                </p>

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
                  required
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="uidnote"
                />
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validPwd ? "valid" : "hide"}
                  />
                  {/*Could maybe try in put these beside the textbox*/}
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validPwd || !pwd ? "hide" : "invalid"}
                  />
                </span>
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
                <TextField
                  id="confirm_pwd"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  //Must be 6 characters minimum
                  placeholder="xxxxxx"
                  style={textStyle}
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />

                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validMatch && matchPwd ? "valid" : "hide"}
                  />
                  {/*Could maybe try in put these beside the textbox*/}
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  />
                </span>
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Must match the first password input field.
                </p>

                <Button
                  type="submit"
                  onClick={handleSubmit}
                  color="primary"
                  variant="contained"
                  disabled={
                    !validName || !validPwd || !validMatch ? true : false
                  }
                >
                  Register
                </Button>
                <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              </FormGroup>
              <p>
                Already registered?
                <br />
                <span className="line">
                  {/*put router link here*/}
                  <a href="/login">Sign In</a>
                </span>
              </p>
            </Grid>
          </Paper>
        </Grid>
      )}
    </>
  );
}
