import React, { useCallback } from "react";
import { reduxForm, Form } from "redux-form";

// hocs
import { withFormField } from "../../../hoc/reduxFormHocs";

// components
import Input from "../../../Input";

const InputField = withFormField(Input);

function PersonForm() {
  const submitHandler = useCallback(() => {});
  
  return (
    <Form onSubmit={submitHandler}>
      <InputField name="name" />
      <InputField name="surname" />
    </Form>
  )
}

export default reduxForm({
  form: 'person',
  initialValues: {
    name: 'Aleksey',
    surname: 'Petrenko',
  }
})(PersonForm);