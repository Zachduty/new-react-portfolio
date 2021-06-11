import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Contact from "./components/pages/contact";
import About from "./components/pages/aboutme"
import Projects from "./components/pages/projects";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={About} />
      <Route exact path="/aboutme" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
    </Router>
  );
}

export default App;
