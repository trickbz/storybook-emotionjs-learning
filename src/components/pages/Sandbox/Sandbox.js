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
                <Label /><Button />
            </div>

            <div>
                <Label /><Button />            
            </div>        
        </div>        
    </div>
  );
}

export default Sandbox;