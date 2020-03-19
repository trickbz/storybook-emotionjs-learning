/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { isFunction } from "lodash";
import PropTypes from "prop-types";

// styles
import * as s from "./Button.styles";

// constants
import { BUTTON_TYPES, BUTTON_TYPE_SECONDARY } from "../../constants/buttonConstants";

function Button(props) {
  const { onClick, children, type, styles, disabled } = props;

  const handleClick = e => {
    if (isFunction(onClick) && !disabled) {
      onClick(e);
    }
  };

  return (
    <button
      css={css`
        ${s.getCommonStyles(props)}
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