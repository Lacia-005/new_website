import React, { useState } from "react";
import "./sidebar.css";
import {
  LineStyle,
  Home,
  Payment,
  Hotel,
  LocalHospital,
  People,
  ListAlt,
} from "@material-ui/icons";
import { Logout, Settings, KeyboardArrowDown } from "@mui/icons-material";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import Collapsible from "react-collapsible";
import useCollapse from "react-collapsed";
import Clock from "../Clock/Clock";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function removeToken() {
  localStorage.clear();
  setToken(null);
  window.location.reload();
}

function Section(props) {
  const config = {
    defaultExpanded: props.defaultExpanded || false,
    collapsedHeight: props.collapsedHeight || 0,
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        <div className="cateBox">
          <span style={{ paddingLeft: "10px" }}>{props.title}</span>
          {/* <i
            className={"fas fa-chevron-circle-" + (isExpanded ? "up" : "down")}
          ></i> */}
          <KeyboardArrowDown
            style={{
              transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
              cursor: "pointer",
            }}
            // onClick={transformArrow}
          />
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const location = useLocation();
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Setting";
    navigate(path);
  };

  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  // const [rotateChevron, setRotateChevron] = useState(false);
  // const transformArrow = () => setRotateChevron(!rotateChevron);
  // const rotate = rotateChevron ? "rotate(0)" : "rotate(180deg)";

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <div className="iconAndName">
              <img src="userIcon.png" alt="icon" style={{ width: "20%" }} />
              <span className="titleDSMS">DSMS</span>
            </div>
            <div className="iconGroup">
              <Logout className="sidebarIcon" onClick={removeToken} />
              <Settings className="sidebarIcon" onClick={routeChange} />
            </div>
          </div>
          {/* <Collapsible
            trigger={[
              "Categories",
              <KeyboardArrowDown
                style={{ transform: rotate, cursor: "pointer", float: "right" }}
                onClick={transformArrow}
              />,
            ]}
            open="true"
            className="collapse"
          > */}
          <Section title="Category" defaultExpanded="true">
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li
                  className={
                    splitLocation[1] === ""
                      ? "sidebarListItem active"
                      : "sidebarListItem"
                  }
                >
                  <div className="divLiBox">
                    <Home className="cateIcon" />
                    All Items
                  </div>
                </li>
              </Link>
              <Link to="/meetings" className="link">
                <li
                  className={
                    splitLocation[1] === "meetings"
                      ? "sidebarListItem active"
                      : "sidebarListItem"
                  }
                >
                  <div className="divLiBox">
                    <img
                      src="meetings.png"
                      alt="meeting"
                      className="cateIcon"
                    />
                    Meetings
                  </div>
                </li>
              </Link>
              <Link to="/reports" className="link">
                <li
                  className={
                    splitLocation[1] === "reports"
                      ? "sidebarListItem active"
                      : "sidebarListItem"
                  }
                >
                  <div className="divLiBox">
                    <img src="reports.png" alt="report" className="cateIcon" />
                    Reports
                  </div>
                </li>
              </Link>
              {/* <Link to="/followup" className="link">
              <li
                className={
                  splitLocation[1] === "followup"
                    ? "sidebarListItem active"
                    : ""
                }
              >
                <img
                  src="followup.png"
                  alt="followup"
                  className="sidebarIcon"
                />
                Follow-up
              </li>
            </Link> */}
            </ul>
          </Section>
          <hr />
          <Clock/>
        </div>
      </div>
    </div>
  );
}
