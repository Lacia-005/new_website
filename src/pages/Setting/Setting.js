import React from "react";
import "./setting.css";
import Email from "../../components/Email/Email";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function removeToken() {
  localStorage.clear();
  setToken(null);
  window.location.reload();
}

export default function Setting() {
  const title = "Setting";

  return (
    <div className="stContainer">
      <h1 style={{ paddingLeft: "20px" }}>Setting</h1>
      {/* <div>Email: asds@gamil.com</div> */}
      <div className="stdivContainer">
        <h3>Account</h3>
        <div className="stboxContainer">
          <Email email="g2694755477@gamil.com" />
          <button className="stButton" onClick={removeToken}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
