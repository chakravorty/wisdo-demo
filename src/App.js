import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Community from "./containers/Homepage/Community";
import Mentors from "./containers/Homepage/Mentors";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/communities" exact component={Community} />
          <Route path="/mentors" exact component={Mentors} />
          <Redirect from="/" to="/communities" />
        </Switch>
      </Router>
    );
  }
}

export default App;
