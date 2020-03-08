/** @jsx jsx */
import { useCallback, Fragment } from "react";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import { reduxForm, Form, formValueSelector } from "redux-form";
import { flow } from "lodash";

// hocs
import { withFormField } from "../../../hoc/reduxFormHocs";

// components
import Input from "../../../Input";
import Button from "../../../Button";

// constants
import { PERSON_FORM_KEY, PERSON_FORM_FIELDS, PERSON_FORM_CONFIG } from "./PersonFormConstats";

// styles
import * as s from "./PersonForm.style";

const InputField = withFormField(Input);

function PersonForm(props) {
  const {
    personName,
    personSurname,
    invalid,
    submit,
    pristine,
    submitting
  } = props;

  const submitHandler = useCallback(() => { alert('submitted') }, []);

  return (
    <Fragment>
      <div css={s.fullName}>
        <strong>FN</strong>: {`${personName} ${personSurname}.`}
      </div>

      <Form onSubmit={submitHandler}>
        <InputField name={PERSON_FORM_FIELDS.NAME} />
        <InputField name={PERSON_FORM_FIELDS.SURNAME} />

        <Button
          disabled={pristine || invalid || submitting}
          onClick={submit}
        >
          Add
        </Button>
      </Form>
    </Fragment>
  )
}

function mapStateToProps(state) {
  const personName = formValueSelector(PERSON_FORM_KEY)(state, PERSON_FORM_FIELDS.NAME);
  const personSurname = formValueSelector(PERSON_FORM_KEY)(state, PERSON_FORM_FIELDS.SURNAME);

  return {
    personName,
    personSurname
  }
}

export default flow(
  reduxForm(PERSON_FORM_CONFIG),
  connect(mapStateToProps)
)(PersonForm);
