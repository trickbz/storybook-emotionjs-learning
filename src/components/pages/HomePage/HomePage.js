/** @jsx jsx */
import { jsx } from "@emotion/core";

// components
import Page from "../../Page";
import Select from "../../Select";

function HomePage() {
  const options = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 }
  ]
  
  return (
    <div>
      <Page title="Home page">
        <Select options={options} />
      </Page>
    </div>
  );
}

export default HomePage;