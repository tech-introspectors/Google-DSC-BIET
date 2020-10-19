import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import { Switch, Route } from "react-router-dom";

// App component
 
export default function App() {
  return (
    <>
      
      <Navbar />
        <Switch>
          <Route default path="/" exact component={Home} />
          <Route  path="/events"  component={Events} />
          <Route  path="/projects"  component={Projects} />
          <Route  path="/team"  component={Team} />
          <Route  path="/contact"  component={Contact} />
        </Switch>
      
    </>
  );
}
