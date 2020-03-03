/** @jsx jsx */
import { jsx } from "@emotion/core";

// components
import Button from "../../Button";
import Label from "../../Label";
import ThemeSwitcher from "../../ThemeSwitcher";

function Theming() {    
  return (
    <div>
        <div>
            <h3>Theming example</h3>

            <ThemeSwitcher />

            <div>
              <Label>Label 1 Text</Label>
              <Button>Button One</Button>
            </div>

            <div>
                <Label>Label 2 Text</Label>
                <Button>Button Two</Button>
            </div>        
        </div>        
    </div>
  );
}

export default Theming;