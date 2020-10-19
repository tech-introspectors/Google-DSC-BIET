import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// App component
 
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Switch>
          <Route  path="/" exact component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}
