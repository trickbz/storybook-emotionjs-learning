import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { isEqual } from "lodash";

// hooks
import { useLocalStorage } from "../hooks/localStorageHooks";

// themes
import blueTheme from "../themes/blueTheme";
import greenTheme from "../themes/greenTheme";

// constants
import { LOCAL_STORAGE_THEME_KEY } from "../constants/localStorageConstants";

function ThemeProvider(props) {
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
    <EmotionThemeProvider theme={themeConfig}>
      {children}
    </EmotionThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProvider;
