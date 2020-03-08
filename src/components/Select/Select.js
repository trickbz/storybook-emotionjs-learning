/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import ReactSelect from "react-select";

function Select(props) {
  const {
    options
  } = props;
  
  return (
    <ReactSelect
      options={options}
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