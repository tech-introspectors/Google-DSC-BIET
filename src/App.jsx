import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Event from "./pages/Events/Event";
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
        <Switch>
          <Route path="/reactjs-dscBiet" exact component={Home} />
          <Route path="/reactjs-dscBiet/event" exact component={Event} />
          <Route path="/reactjs-dscBiet/projects" exact component={Projects} />
          <Route path="/reactjs-dscBiet/team" exact component={Team} />
          <Route path="/reactjs-dscBiet/contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}
