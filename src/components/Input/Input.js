import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { get, isFunction } from "lodash";

// styles
import { inputContainer } from "./InputStyles";

function Input(props) {
  const {
    onChange,
    value,
    ...otherProps
  } = props;

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = useCallback(e => {
    const value = get(e, 'target.value');
    setInputValue(value);
    if (isFunction(onChange)) {
      onChange(value);
    }
  }, [onChange]);

  return (
    <div css={inputContainer}>
      <input
        value={inputValue}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default Input;