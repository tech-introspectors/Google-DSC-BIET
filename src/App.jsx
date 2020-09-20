import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import Events from "./components/pages/Events/Events";
import Projects from "./components/pages/Projects/Projects";
import Team from "./components/pages/Team/Team";
import Contact from "./components/pages/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}
