import React from "react";
import { useTheme } from "emotion-theming";
import { css } from "@emotion/core";

// components
import Button from "../Button";

function ThemeSwitcher() {
  const { toggleTheme } = useTheme();

  return (
    <Button 
      onClick={toggleTheme}
      styles={css`
        margin-bottom: 10px;
      `}
    >
      Switch Theme
    </Button>
  )
}

export default ThemeSwitcher;