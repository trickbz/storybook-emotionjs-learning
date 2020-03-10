/** @jsx jsx */
import { jsx } from "@emotion/core";

// components
import Page from "../../Page";
import Toggle from "../../Toggle/Toggle";

function HomePage() {
  
  return (
    <div>
      <Page title="Home page">
        Welcome to homepage? Nothing interesting here.
        <br /><br />
        <Toggle />
      </Page>
    </div>
  );
}

export default HomePage;