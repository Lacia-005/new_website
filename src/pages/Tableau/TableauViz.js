import React, { useEffect, useRef } from "react";
import TableauReport from "tableau-react";
import "./tableauviz.css";
import { useLocation } from "react-router-dom";

// const { tableau } = window;

export default function TableauViz() {
  // const ref = useRef(null);

  const location = useLocation();
  // const url =
  //   "https://public.tableau.com/views/fypDemo/fypDemo?:language=en-US&:display_count=n&:origin=viz_share_link";
  const url = location.state.link;

  const options = {
    height: "100vh",
    width: "100%",
    device: "tablet",
  };

  return (
    <div className="tabContainer">
      <TableauReport
        url={url}
        options={options}
        query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
      />
      {/* { initViz} */}
    </div>
  );
}
