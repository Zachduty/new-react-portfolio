import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../css/projects.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Projects() {
    return (
        <div class="how-section1">
        <div class="row">
            <div class="col-md-6 how-img">
                <img src="/images/stagecoach.png" class="rounded-circle img-fluid" alt=""/>
            </div>
            <div class="col-md-6">
                <h4>StageCoach</h4>
                            <h4 class="subheading">Connecting local bands, with local venues.</h4>
            <p class="text-muted">Final project for the bootcamp. Worked on this site with my team for 2 weeks using React,
            JavaScript, Bootstrap, MySQL, Node, and deployed on Heroku. <a href="https://github.com/MattReisdorf/StageCoach">Link</a> </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h4>Unify</h4>
                            <h4 class="subheading">Power to the people.</h4>
                            <p class="text-muted">Within 5 days my team and I built and deployed this site that was designed to
                            connect workers with unions and provide anonymity for a sense of security.
                            <a href="https://github.com/Vygoth/Unify">Link</a></p>
            </div>
            <div class="col-md-6 how-img">
                <img src="/images/unify.png" class="rounded-circle img-fluid" alt=""/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 how-img">
                 <img src="/images/tech.png" class="rounded-circle img-fluid" alt=""/>
            </div>
            <div class="col-md-6">
                <h4>Tech Blog</h4>
                            <h4 class="subheading">Whats on your mind?</h4>
                            <p class="text-muted">Built using a knowledge of MVC to showcase CRUD methods.
                            <a href="https://github.com/Zachduty/techblog">Link</a></p>
            </div>
        </div>
    </div>




    );
}

export default Projects;