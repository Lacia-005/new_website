import React from "react";
import "./meetings.css";
// import { ZoomMtg } from "@zoomus/websdk";

// ZoomMtg.setZoomJSLib("https://source.zoom.us/2.3.5/lib", "/av");

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// // loads language files, also passes any error messages to the ui
// ZoomMtg.i18n.load("en-US");
// ZoomMtg.i18n.reload("en-US");

export default function Meetings() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="mtContainer">
      <h1 style={{ paddingLeft: "20px" }}>Meeting Panel</h1>
      {/* <img src="zoom.png" alt="zoom icon" className="center" /> */}
      <button
        onClick={() =>
          openInNewTab(
            navigator.onLine
              ? "https://us05web.zoom.us/j/9753227857?pwd=YVd1SVlSdnFXaUdFY3Q1bFBsL2d2dz09"
              : "/demo.mp4"
          )
        }
        className="btMeet"
      >
        Start Meeting
      </button>
    </div>
  );
}
