/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

function Label(props) {
  const {
    children
  } = props;
  
  const theme = useTheme();

  const innerStyles = css`
    display: inline-block;
  `;
  
  return (
    <div
      css={css`
        color: ${theme.colors.controlText};
        background-color: ${theme.colors.controlBackground};
        border: 1px solid ${theme.colors.controlBorderColor};
        ${innerStyles};        
      `}
    >
      {children}
    </div>
  )
}

export default Label;