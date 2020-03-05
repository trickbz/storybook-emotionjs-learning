import React from "react";
import { reduxForm, Form } from "redux-form";

// hocs
import { withFormField } from "../../../hoc/reduxFormHocs";

// components
import Input from "../../../Input";

const InputField = withFormField(Input);

function PersonForm() {
  return (
    <Form>
      <InputField name="name" />
      <InputField name="surname" border />
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