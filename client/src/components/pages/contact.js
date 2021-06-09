import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../css/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div id="contact">
      <h1>Email <a class="btn" href="mailto:jonathanduty2021@u.northwestern.cedu" target="_blank"  ><img src="/images/email.png"></img></a></h1>
      <h1>GitHub <a class="btn" href="https://github.com/Zachduty"><img src="/images/github.png"></img></a></h1>
      <h1>LinkedIn <a class="btn" href="https://www.linkedin.com/in/jonathanzduty"><img src="/images/linkedin.png"></img></a></h1>
    </div>
  );
}

export default Contact;
