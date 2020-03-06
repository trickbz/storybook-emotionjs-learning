import React, { useCallback } from "react";
import { Field } from "redux-form";
import { partial } from "lodash";

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

export const withFormField = WrappedComponent => props => {
  const {
    name,
    ...componentProps
  } = props;

  const Component = useCallback(
    partial(ComponentWrapper, WrappedComponent), 
    [ComponentWrapper, WrappedComponent]
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
