import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import Home from "./components/pages/Home";
import Sandbox from "./components/pages/Sandbox";

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Sandbox</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>          
        </ul>

        <Switch>
          <Route exact path="/">
            <Sandbox />
          </Route>
          <Route path="/home">
            <Home />
          </Route>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
