import React from "react";
import { ThemeProvider } from "emotion-theming";
import blueTheme from "../src/themes/blueTheme";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={{ theme: blueTheme }}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator;