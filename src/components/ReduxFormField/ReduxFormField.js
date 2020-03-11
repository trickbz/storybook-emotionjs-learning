/** @jsx jsx */
import { useCallback } from "react";
import { Field } from "redux-form";
import { partial } from "lodash";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

const ComponentWrapper = (Component, fieldProps) => {
  const {
    input: { value, onChange },
    meta,
    ...componentProps
  } = fieldProps;

  return (
    <Component
      value={value}
      onChange={onChange}
      {...componentProps}
    />
  )
}  

const ReduxFormField = props => {
  const {
    name,
    component,
    ...componentProps
  } = props;

  const Component = useCallback(
    partial(ComponentWrapper, component), 
    [ComponentWrapper, component]
  );

  return (
    <div>
      <Field
        name={name}
        component={Component}
        {...componentProps}
       />
    </div>
  )
}

ReduxFormField.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}

export default ReduxFormField;
