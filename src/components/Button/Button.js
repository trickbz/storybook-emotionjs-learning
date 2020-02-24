/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

function Button({ onClick, children }) {
  const theme = useTheme();

  const handleClick = e => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      css={css`
        color: ${theme.colors.controlText};
        background-color: ${theme.colors.controlBackground};
        border: 1px solid ${theme.colors.controlBorderColor};
      `}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button;