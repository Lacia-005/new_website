import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Meetings from "./pages/Meetings/Meetings";
import Reports from "./pages/Reports/Reports";
import Followup from "./pages/Followup/Followup";
import Tableau from "./pages/Tableau/TableauViz";
import Login from "./pages/Login/Login";
import useToken from "./components/App/useToken";
import Sidebar from "./components/sidebar/Sidebar";
import Setting from "./pages/Setting/Setting";
import { flushSync } from "react-dom";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function removeToken() {
  localStorage.clear();
  setToken(null);
  window.location.reload();
}

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/meetings" element={<Meetings />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/tableau" element={<Tableau />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          {/* <Route path="/followup" element={<Followup />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
