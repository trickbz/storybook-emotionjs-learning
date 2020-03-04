/** @jsx jsx */
import { useState, useCallback } from "react";
import { css, jsx } from "@emotion/core";
import Button from "../../Button";

function AbsolutelyPositionedDiv(props) {
  const { show } = props;
  
  return (
    <div
      css={css`
        position: absolute;
        background-color: lightcoral;
        height: 50px;
        left: 50px;
        padding: 10px;
        display: ${show ? 'block' : 'none'};
      `}
    >
      I'm absolute
    </div>
  );
}

function BottomMessage() {
  return (
    <div
      css={css`
        background-color: lightgray;
      `}
    >
      I'm bottom message
    </div>
  )
}

function UseLayoutEffect() {
  const [show, setShow] = useState(true);
  const handleSetShow = useCallback(() => setShow(!show), [show]);
  
  return (
    <div>
        <h2>UseLayoutEffect hook</h2>
        <AbsolutelyPositionedDiv show={show} />
        <BottomMessage />
        <Button onClick={handleSetShow}>Toggle show message</Button>
    </div>
  );
}

export default UseLayoutEffect;