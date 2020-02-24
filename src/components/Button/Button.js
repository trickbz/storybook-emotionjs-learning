/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

function Button(props) {
  const theme = useTheme();
  console.log('theme.colors.controlText', theme.colors.controlText);

  return (
    <button
      css={css`
        color: ${theme.colors.controlText};
        background-color: ${theme.colors.controlBackground};
        border: 1px solid ${theme.colors.controlBorderColor};
      `}
    >
      Button Text
    </button>
  )
}

export default Button;