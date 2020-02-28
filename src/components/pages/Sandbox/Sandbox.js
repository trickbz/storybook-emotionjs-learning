import React, { useState } from "react";

// components
import Button from "../../Button";
import Label from "../../Label";

const functions = new Set();

function Sandbox() {  
  return (
    <div>
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