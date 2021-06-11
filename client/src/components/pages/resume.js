import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../css/resume.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Resume() {
  return (
    <container>
    <div id="resume-div">
    <object data="resume.pdf" type="application/pdf">
<a href="resume.pdf">test.pdf</a>
</object>
    </div>

    </container>
  );
}   

export default Resume;