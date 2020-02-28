/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { isFunction } from "lodash";
import PropTypes from "prop-types";

// styles
import { labelStyles } from "./../../styles/commonStyles";

// constants
import { BUTTON_TYPES, BUTTON_TYPE_SECONDARY } from "../../constants/buttonConstants";

function Button(props) {
  const { onClick, children, rounded, type, styles } = props;
  const theme = useTheme();

  const handleClick = e => {
    if (isFunction(onClick)) {
      onClick(e);
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
        ${styles};
      `}
      onClick={handleClick}
    >
      {children} - {type}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf(BUTTON_TYPES),
  styles: PropTypes.object
}

Button.defaultProps = {
  type: BUTTON_TYPE_SECONDARY
};

export default Button;