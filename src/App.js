import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import Faveroite from "./component/Faveroite";
import Home from "./component/Home";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/fav">
              <Faveroite />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
