import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Contact from "./components/pages/contact";
import About from "./components/pages/aboutme"
import Resume from "./components/pages/resume";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={About} />
      <Route exact path="/aboutme" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
    </Router>
  );
}

export default App;
