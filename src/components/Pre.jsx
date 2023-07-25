import React from "react";
import "./Preloader.css";
function Pre(props) {
  return (
    <div id={props.load ? "preloader-container" : "preloader-none"}>
      <div className="preloader"></div>
    </div>
  );
}

export default Pre;
