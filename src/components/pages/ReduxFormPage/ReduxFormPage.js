/** @jsx jsx */
import { jsx } from "@emotion/core";

// components
import PersonForm from "./PersonForm";

function ReduxFormPage() {
  return (
    <div>
      <h2>Redux Form Page test</h2>

      <ul>
        <li>redux-form example</li>
        <li>simple version of hoc is used to turn regular controls to redux-form-fields</li>
      </ul>

      <h3>TODO</h3>

      <ul>
        <li>Add field validation</li>        
        <li>Add subit button which is disabled when form is invalid </li>
        <li>Create checkbox control and turn in into form-field using hoc</li>
        <li>Display form values taken from store by builit-in redux-form selectors</li>
      </ul>

      <PersonForm />
    </div>
  );
}

export default ReduxFormPage;