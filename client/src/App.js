import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Contact from "./components/pages/contact";
import About from "./components/pages/aboutme"

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/aboutme" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
