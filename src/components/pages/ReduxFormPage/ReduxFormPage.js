/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

// components
import Button from "../../Button";
import Input from "../../Input";

// styles
import {
  inputContainer
} from "./ReduxFormPageStyles";

function ReduxFormPage() {
  const [inputValue, setInputValue] = useState('test input value');

  return (
    <div>
      <div>
        <h2>Redux Form Page test</h2>
        <div css={inputContainer}>Input Value: {inputValue}</div>
        
        <Input
          value={inputValue}
          onChange={setInputValue}
        />
        <br />
        <Button onClick={() => setInputValue('')}>Clear input value</Button>
      </div>
    </div>
  );
}

export default ReduxFormPage;