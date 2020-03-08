/** @jsx jsx */
import { jsx } from "@emotion/core";

// components
import Button from "../../Button";
import Label from "../../Label";
import ThemeSwitcher from "../../ThemeSwitcher";
import CssModulesStyledBox from "./CssModulesStyledBox";
import Page from "../../Page";

// styles
import { 
  labelStyles, 
  divStyles 
} from "./ThemingPage.styles";

function ThemingPage() {    
  return (
    <Page title="Switch theme example">
      <ThemeSwitcher />

      <div css={divStyles}>
        <Label styles={labelStyles}>Label 1 Text</Label>
        <Button>Button One</Button>
      </div>

      <div css={divStyles}>
          <Label styles={labelStyles}>Label 2 Text</Label>
          <Button>Button Two</Button>
      </div>    

      <h3>CSS modules example</h3>    

      <ol>
        <li>SCSS and CSS file extensions are supported</li>
        <li>File must follow naming pattern [name].module.[scss|css] to be processed by CRA properly</li>
      </ol>

      <CssModulesStyledBox />
    </Page>
  );
}

export default ThemingPage;