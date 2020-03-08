/** @jsx jsx */
import { jsx } from "@emotion/core";

// components
import PersonForm from "./PersonForm";
import Page from "../../Page";

function ReduxFormPage() {
  return (
    <Page title="Redux Form Page">
      <div>
        <ul>
          <li>redux-form example</li>
          <li>simple version of hoc is used to turn regular controls to redux-form-fields</li>
        </ul>

        <h3>TODO</h3>

        <ul>
          <li>Create checkbox control and turn in into form-field using hoc</li>
        </ul>

        <PersonForm />
      </div>
    </Page>
  );
}

export default ReduxFormPage;