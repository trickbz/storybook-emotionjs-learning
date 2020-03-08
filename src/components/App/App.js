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
import HomePage from "../pages/HomePage";
import ThemingPage from "../pages/ThemingPage";
import UseCallbackPage from "../pages/UseCallbackPage";
import UseLayoutEffectPage from "../pages/UseLayoutEffectPage";
import ReduxFormPage from "../pages/ReduxFormPage";

// styles
import './App.css';

// constants
import MenuConfig from "../../config/menuConfig";
import { 
  THEMING_ROUTE, 
  HOME_ROUTE, 
  USE_CALLBACK_ROUTE, 
  USE_LAYOUT_EFFECT_ROUTE, 
  REDUX_FROM_PAGE
} from '../../constants/routerConstants';
import { LOCAL_STORAGE_THEME_KEY } from "../../constants/localStorageConstants";

// themes
import blueTheme from "../../themes/blueTheme";
import greenTheme from "../../themes/greenTheme";

// hooks
import { useLocalStorage } from "../../hooks/localStorageHooks";

function App() {   
  const [theme, setTheme] = useLocalStorage(LOCAL_STORAGE_THEME_KEY, greenTheme);
  
  const toggleTheme = useCallback(() => {
    const nextTheme = isEqual(theme, greenTheme)
      ? blueTheme
      : greenTheme;
    setTheme(nextTheme);
  }, [theme, setTheme]);
   
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
          <Menu items={MenuConfig} />

          <Switch>
            <Route path={HOME_ROUTE} exact>
              <HomePage />
            </Route>               
            <Route path={THEMING_ROUTE}>
              <ThemingPage />
            </Route>
            <Route path={USE_CALLBACK_ROUTE}>
              <UseCallbackPage />
            </Route>        
            <Route path={USE_LAYOUT_EFFECT_ROUTE}>
              <UseLayoutEffectPage />
            </Route>                                  
            <Route path={REDUX_FROM_PAGE}>
              <ReduxFormPage />
            </Route>                                  
          </Switch>        
        </div>
      </Router>      
    </ThemeProvider>
  );
}

export default App;
