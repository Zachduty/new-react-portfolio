import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../css/aboutme.css";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
     <div class="how-section1">
                    <div class="row">
                        <div class="col-md-6 how-img">
                            <img src="/images/chicago.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Chicago, IL</h4>
                                        <h4 class="subheading">Based out of Chicago, IL</h4>
                        <p class="text-muted">Currently working through Northwestern University's coding bootcamp. While the tons of information comes fast it can sometimes be challenging.
                        I've learned that I'm suited well under pressure while working towards my goals and ready to tackle any obstacles that may come my way.  </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>Proficient in GitHub</h4>
                                        <h4 class="subheading">Excited and ready to work in a team environment</h4>
                                        <p class="text-muted">Working with classmates has helped me work very well in a team environment.
                                        Using GitHub has been a huge part of class and I've familiarized myself with it very well.</p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src="/images/gitblue.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 how-img">
                             <img src="/images/js.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div class="col-md-6">
                            <h4>Languages</h4>
                                        <h4 class="subheading">Frontend? Back end? Full-Stack</h4>
                                        <p class="text-muted">From the basics like HTML5 and CSS to libraries like Bootstrap and Materialize.
                                        From JavaScript to nodeJS and jQuery. MVC to OOP and SQL to MongoDB, 
                                        I've learned about a lot and if I don't know it, I will learn it and figure it out.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>React</h4>
                                        <h4 class="subheading">Old and new</h4>
                                        <p class="text-muted">Familiar with both styles, old and new. Whatever version of you site uses or whatever way you use React, 
                                        I can work with. Currently learning Angular and Vue!</p>
                        </div>
                        <div class="col-md-6 how-img">
                            <img src="/images/react.png" class="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
  );
}

export default About;
