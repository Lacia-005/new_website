import React, { useState, useEffect } from "react";
import { WatchLater } from "@mui/icons-material";
import "./clock.css";

export default function Clock() {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="clockBox">
      <br />
      <WatchLater />
      <p> {date.toLocaleTimeString()}</p>
    </div>
  );
}
