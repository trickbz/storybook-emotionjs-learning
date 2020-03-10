/** @jsx jsx */
import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";
import { isFunction } from "lodash";

// styles
import * as s from "./Toggle.styles";

function Toggle(props) {
  const {
    value,
    onChange,
    disabled
  } = props;

  const [selected, setSelected] = useState(value);

  const handleOnChange = useCallback(() => {
    if (!disabled) {
      setSelected(!selected);
      isFunction(onChange) && onChange(selected);
    }
  }, [selected, disabled, onChange]);
  
  return (
    <div
      css={css`
        ${s.container};
        ${selected && s.selectedContainer};
        ${disabled && s.disabledContainer}
      `}
      onClick={handleOnChange}
    >
      <div css={[s.slider, selected && s.sliderSelected]} />
    </div>
  )
}

Toggle.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

export default Toggle;