/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { isFunction } from "lodash";
import PropTypes from "prop-types";

// styles
import { labelStyles } from "./../../styles/commonStyles";

function Button({ onClick, children, rounded }) {
  const theme = useTheme();

  const handleClick = e => {
    e.preventDefault();
    if (isFunction(onClick)) {
      onClick();
    }
  };

  return (
    <button
      css={css`
        color: ${theme.colors.controlText};
        background-color: ${theme.colors.controlBackground};
        border: 1px solid ${theme.colors.controlBorderColor};
        border-radius: ${rounded ? '10px' : '0'};
        ${labelStyles};
      `}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  rounded: PropTypes.bool
}

export default Button;