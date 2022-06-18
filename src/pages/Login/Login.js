import React, { useState } from "react";
import PropTypes from "prop-types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";

import "./Login.css";

async function loginUser(credentials) {
  return fetch(
    window.location.hostname === "localhost"
      ? "http://localhost:3001/login"
      : "/login",
    {
      //need remove
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }
  ).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  // const [email, setEmail] = useState();

  const [hidden, setHidden] = useState(false);
  const [hiddenNext, setHiddenNext] = useState(true);
  const showPs = (e) => {
    setHidden(!hidden);
    setHiddenNext(!hiddenNext);
    e.preventDefault();
  };

  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <div className="loginBox">
        <div className="titleFont">
          Early-stage Depression
          <br />
          Detection System with
          <br />
          Multi-model NLP Analytics
        </div>
        <h2 hidden={hidden} className="titleFont">
          Log In
        </h2>
        {/* <form onSubmit={handleSubmit}> */}
        {/* <form style={{width:"50%"}}> */}
        {/* <p hidden={hidden}>Username</p> */}
        <div className="form">
          <div className="input-container">
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              hidden={hidden}
              value={username}
              className="textBox"
            />
            <label hidden={hidden} className={username && "filled"}>
              User Name
            </label>
            <button className="loginBt" hidden={hidden} onClick={showPs}>
              Continue
            </button>
          </div>
          {/* <p hidden={hiddenNext}>Enter Password</p> */}
          <h2 hidden={hiddenNext} className="titleFont">
            Enter Password
          </h2>
          <span hidden={hiddenNext}>{username}</span>
          <div className="input-container">
            {/* <input
            type={passwordShown ? "text" : "password"}
            hidden={hiddenNext}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Visibility visibility={hiddenNext?"hidden":""} /> */}
            <Input
              type={passwordShown ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              style={{ visibility: hiddenNext ? "hidden" : "visible" }}
              value={password}
              className="pwCss"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {passwordShown ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {/* <button onClick={togglePassword}>Show Password</button> */}
            <label hidden={hiddenNext} className={password && "filled"}>
              Password
            </label>
            <button
              type="submit"
              className="loginBt"
              hidden={hiddenNext}
              onClick={handleSubmit}
            >
              Unlock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
