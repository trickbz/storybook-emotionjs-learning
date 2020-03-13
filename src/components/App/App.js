/** @jsx jsx */
import { useState, useEffect, useCallback } from "react";
import { isEqual } from "lodash";
import PropTypes from "prop-types";
import { ThemeProvider } from "emotion-theming";
import { jsx } from "@emotion/core";

// components
import Menu from './Menu';
import Loader from "./Loader";

// styles
import './App.css';

// constants
import MenuConfig from "../../config/menuConfig";
import { LOCAL_STORAGE_THEME_KEY } from "../../constants/localStorageConstants";

// themes
import blueTheme from "../../themes/blueTheme";
import greenTheme from "../../themes/greenTheme";

// hooks
import { useLocalStorage } from "../../hooks/localStorageHooks";

function App(props) {   
  const {
    children
  } = props;
  
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
      <div>
        <Menu items={MenuConfig} />
        <Loader />
        {children}
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.node  
}

export default App;
