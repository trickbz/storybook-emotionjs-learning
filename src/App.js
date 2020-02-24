/** @jsx jsx */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Global, css, jsx } from "@emotion/core";
import normalize from "normalize.css";
import { ThemeProvider } from "emotion-theming";

// components
import Button from './components/Button';

// pages
import Home from "./components/pages/Home";
import Sandbox from "./components/pages/Sandbox";

// styles
import './App.css';

// themes
import greenTheme from "./themes/greenTheme";
import blueTheme from "./themes/blueTheme";

function App() {
  const [theme, setTheme] = useState(greenTheme);

  const onChangeThemeClick = () => {
    setTheme(theme === greenTheme ? blueTheme : greenTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${normalize}
          body {
            background-color: #fafafa;
          }
        `}
      />
      <Router>
        <div
          css={css`
            color: red;
            font-weight: 800;
            text-align: center;
          `}
        >
          Text Inside Div
        </div>
        
        <div className="App">
          <ul>
            <li>
              <Link to="/">Sandbox</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>          
          </ul>

          <Button onClick={onChangeThemeClick}>
            Change theme
          </Button>

          <Switch>
            <Route exact path="/">
              <Sandbox />
            </Route>
            <Route path="/home">
              <Home />
            </Route>          
          </Switch>        
        </div>
      </Router>      
    </ThemeProvider>
  );
}

export default App;
