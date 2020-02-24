/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

function Label() {
  const theme = useTheme();
  
  return (
    <div
      css={css`
        color: ${theme.colors.controlText};
        background-color: ${theme.colors.controlBackground};
        border: 1px solid ${theme.colors.controlBorderColor};        
      `}
    >
      Label component
    </div>
  )
}

export default Label;