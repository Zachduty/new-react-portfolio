import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../css/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    // <div id="contact">
    //   <h1>Email <a class="btn" href="mailto:jonathanduty2021@u.northwestern.cedu" target="_blank"  ><img src="/images/email.png"></img></a></h1>
    //   <h1>GitHub <a class="btn" href="https://github.com/Zachduty"><img src="/images/github.png"></img></a></h1>
    //   <h1>LinkedIn <a class="btn" href="https://www.linkedin.com/in/jonathanzduty"><img src="/images/linkedin.png"></img></a></h1>
    // </div>


    <div class="how-section1">
    <div class="row">
        <div class="col-md-6 how-img">
            <img src="/images/email.png" class="rounded-circle img-fluid"  alt=""/>
        </div>
        <div class="col-md-6">
            <h4>Contact me!</h4>
                        <h2 class="subheading1"><a href="mailto:jonathanduty2021northwestern.edu">Email me here</a></h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <h4>GitHub</h4>
                        <h2 class="text">You can check out my repos <a href="http://www.github.com/zachduty">HERE</a></h2>
        </div>
        <div class="col-md-6 how-img">
            <img src="/images/github.png" class="rounded-circle img-fluid" alt=""/>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 how-img">
            <img src="/images/linkedin.png" class="rounded-circle img-fluid" alt=""/>
        </div>
        <div class="col-md-6">
            <h4>LinkedIn</h4>
                        <h4 class="subheading">Check out my <a href="http://www.linkedin.com/in/jonathanzduty">LinkedIn</a> </h4>
                       
        </div>
    </div>
    </div>
    
  );
}

export default Contact;
