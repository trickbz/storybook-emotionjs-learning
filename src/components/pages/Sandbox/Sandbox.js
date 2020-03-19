/** @jsx jsx */
import { jsx } from "@emotion/core";

// components
import Page from "../../Page";
import Button from "../../Button";

function Sandbox() {
  return (
    <div>
      <Page title="Sandbox page">
        Welcome to Sandbox page? Nothing interesting here.
        <br /><br />
        <Button rounded onClick={() => alert('clicked')}>Rounded button Example</Button>
      </Page>
    </div>
  );
}

export default Sandbox;
