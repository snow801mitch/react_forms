import React, { Component } from "react";
import "./App.css";
import Login from "./forms/login";
import Registration from "./forms/registration";
import About from "./forms/About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to="/app">Home</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            </ul>

            <Route exact path="/app" component={App} />
            <Route path="/registration" component={Registration} />
            <Route path="/About" component={About} />
        </header>


        <h1>You Shall Not Pass</h1>
        <Login />
        <Registration />
        <About />
        
      </div>
      </Router>
    );
  }
}

export default App;
