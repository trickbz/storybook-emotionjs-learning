import React from "react";
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

  return (
    <div>
      <Field
        name={name}
        component={partial(ComponentWrapper, WrappedComponent)}
        {...componentProps}
       />
    </div>
  )
}
