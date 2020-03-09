import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./NavBar.js";
import Home from "./Home";
import Store from "./Store";
import About from "./About";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Design/App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Store" component={Store} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
