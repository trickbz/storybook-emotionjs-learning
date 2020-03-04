/** @jsx jsx */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Global, css, jsx } from "@emotion/core";
import normalize from "normalize.css";
import { ThemeProvider } from "emotion-theming";
import { useState, useEffect, useCallback } from "react";
import { isEqual } from "lodash";

// components
import Menu from './Menu';

// pages
import Home from "../pages/Home";
import Theming from "../pages/Theming";
import Hooks from "../pages/Hooks";
import UseLayoutEffect from "../pages/UseLayoutEffect";

// styles
import './App.css';

// constants
import MenuConfig from "../../config/menuConfig";
import { 
  THEMING_ROUTE, 
  HOME_ROUTE, 
  USE_CALLBACK_ROUTE, 
  USE_LAYOUT_EFFECT_ROUTE 
} from '../../constants/routerConstants';

// themes
import blueTheme from "../../themes/blueTheme";
import greenTheme from "../../themes/greenTheme";

function App() {   
  const [theme, setTheme] = useState(greenTheme);

  const toggleTheme = useCallback(() => {
    const nextTheme = isEqual(theme, greenTheme)
      ? blueTheme
      : greenTheme;
    setTheme(nextTheme);
  }, [theme]);
   
  const [themeConfig, setThemeConfig] = useState({
    theme,
    toggleTheme
  });

  useEffect(() => {
    setThemeConfig({
      theme,
      toggleTheme
    })
  }, [theme, toggleTheme]);

  return (
    <ThemeProvider theme={themeConfig}>
      <Global
        styles={css`
          ${normalize}
          body {
            background-color: #fafafa;
          }
        `}
      />
      <Router>
        <div>
          <Menu items={MenuConfig}   />

          <Switch>
            <Route path={HOME_ROUTE} exact>
              <Home />
            </Route>               
            <Route path={THEMING_ROUTE}>
              <Theming />
            </Route>
            <Route path={USE_CALLBACK_ROUTE}>
              <Hooks />
            </Route>        
            <Route path={USE_LAYOUT_EFFECT_ROUTE}>
              <UseLayoutEffect />
            </Route>                                  
          </Switch>        
        </div>
      </Router>      
    </ThemeProvider>
  );
}

export default App;
