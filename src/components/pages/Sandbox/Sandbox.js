import React from "react";

// components
import Button from "../../Button";
import Label from "../../Label";

function Sandbox() {
  return (
    <div>
        <h2>Sandbox</h2>

        <div>
            <h3>components</h3>

            <div>
            <Label>Label 1 Text</Label><Button>Button One</Button>
            </div>

            <div>
                <Label>Label 2 Text</Label><Button>Button Two</Button>
            </div>        
        </div>        
    </div>
  );
}

export default Sandbox;