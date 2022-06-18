import React, { useState } from "react";
import "./dashboard.css";
// import Collapsible from "react-collapsible";
import useCollapse from "react-collapsed";
import { Link, NavLink, useLocation } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import Box from "../../components/MenuBox/MenuBox.js";
import { features } from "../../menuName";

function Section(props) {
  const config = {
    defaultExpanded: props.defaultExpanded || false,
    collapsedHeight: props.collapsedHeight || 0,
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        <div className="titleBox">
          {props.title}
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

export default function Dashboard() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 0.5,
      }}
    />
  );

  return (
    <div className="dbContainer">
      <h1 style={{ paddingLeft: "20px" }}>Menu</h1>
      <div className="meunContainer">
        {/* <Link to="/meetings" className="link">
          <Box img="meetings.png" name="Meetings"></Box>
        </Link>
        <Link to="/reports" className="link">
          <Box img="reports.png" name="Records"></Box>
        </Link> */}
        {features.map((feature) => (
          <div className="linkBox">
            <Link to={feature.link} className="link">
              <Box img={feature.img} name={feature.name}></Box>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
