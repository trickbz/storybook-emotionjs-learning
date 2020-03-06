/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { isFunction } from "lodash";
import PropTypes from "prop-types";

// styles
import * as s from "./Button.style";

// constants
import { BUTTON_TYPES, BUTTON_TYPE_SECONDARY } from "../../constants/buttonConstants";

function Button(props) {
  const { onClick, children, rounded, type, styles, disabled } = props;
  const { theme } = useTheme();

  const handleClick = e => {
    if (isFunction(onClick) && !disabled) {
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
        ${disabled && s.disabled}
        ${styles};
      `}
      onClick={handleClick}
      type="button"
      className={`type-${type}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf(BUTTON_TYPES),
  styles: PropTypes.object,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  type: BUTTON_TYPE_SECONDARY,
  disabled: false
};

export default Button;