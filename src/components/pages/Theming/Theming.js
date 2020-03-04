/** @jsx jsx */
import { jsx } from "@emotion/core";

// components
import Button from "../../Button";
import Label from "../../Label";
import ThemeSwitcher from "../../ThemeSwitcher";

// styles
import { 
  labelStyles, 
  divStyles 
} from "./ThemingStyles";

function Theming() {    
  return (
    <div>
        <div>
            <h3>Theming example</h3>

            <ThemeSwitcher />

            <div css={divStyles}>
              <Label styles={labelStyles}>Label 1 Text</Label>
              <Button>Button One</Button>
            </div>

            <div css={divStyles}>
                <Label styles={labelStyles}>Label 2 Text</Label>
                <Button>Button Two</Button>
            </div>        
        </div>        
    </div>
  );
}

export default Theming;