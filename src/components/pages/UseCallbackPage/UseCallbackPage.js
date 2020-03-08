import React, { useState, useCallback } from "react";

// components
import RandomColoredButton from "../../RandomColoredButton";
import Page from "../../Page";

const functions = new Set();

// https://nikgrozev.com/2019/04/07/reacts-usecallback-and-usememo-hooks-by-example/
function UseCallbackPage() {
  const [ step, setStep ] = useState(1);
  const [ count, setCount ] = useState(0);

  const incrementStep = useCallback(() => setStep(step => step + 1), []);
  const incrementCount = useCallback(() => setCount(count => count + step), [step]);

  functions.add(incrementStep);
  functions.add(incrementCount);
  
  return (
    <Page title="useCallback hook">
      <a href="https://nikgrozev.com/2019/04/07/reacts-usecallback-and-usememo-hooks-by-example/" target="blank">Source</a>
      <br /><br />

      <div>
          <div>
              <div>{`Count: ${count};`}</div>
              <div>{`Step: ${step};`}</div>
              <div>{`Functions: ${functions.size - 2};`}</div>
              <RandomColoredButton onClick={incrementStep}>Increment Step</RandomColoredButton>
              <RandomColoredButton onClick={incrementCount}>Increment Count</RandomColoredButton>
          </div>
      </div>        
    </Page>
  );
}

export default UseCallbackPage;