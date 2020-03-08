/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import ReactSelect from "react-select";

function Select(props) {
  const {
    options,
    className
  } = props;
  
  return (
    <ReactSelect
      options={options}
      classNamePrefix="select"
      className={className}
    />
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any
  }))
};

export default Select;