/** @jsx jsx */
import { useState, useCallback, useRef, forwardRef } from "react";
import { css, jsx } from "@emotion/core";

// components
import Button from "../../Button";

// hooks
import { useMoveElementBelowOtherHook } from "../../../hooks/moveBelowHook";

const AbsoluteBox = forwardRef((props, ref) => {
  const { onClick } = props;
  
  return (
    <div
      css={css`
        position: absolute;
        background-color: lightcoral;
        height: 50px;
        left: 50px;
        padding: 10px;
        display: flex;
        align-items: center;
        user-select: none;
      `}
      ref={ref}
      onClick={onClick}
    >
      Click Me
    </div>
  );
})

const BottomMessage = ({ show, outerRef, isLayoutEffect }) => {
  const ref = useMoveElementBelowOtherHook(outerRef, isLayoutEffect);

  return (
    <div
      css={css`
        background-color: lightgray;
        position: relative;
        display: ${show ? 'block' : 'none'};        
      `}
      ref={ref}
    >
      I'm bottom message
    </div>
  );
};

function UseLayoutEffectPage() {
  const [show, setShow] = useState(true);
  const [isLayoutEffect, setIsLayoutEffect] = useState(false);
  
  const handleSetShow = useCallback(() => {
    setShow(!show);
  }, [show]);
  const absoluteBoxRef = useRef(null);
  
  return (
    <div>
        <h2>UseLayoutEffect hook</h2>
        <ol>
            <li>switch to this page using menu to see bottom message flickering while positioning bellow the red box</li>
            <li>replace useEffect with useLayoutEffect and do #1 to see that message stops flickering</li>
        </ol>
        <b css={css`margin-right: 10px;`}>Hook used: {isLayoutEffect ? 'useLayoutEffect' : 'useEffect'}</b>
        <Button onClick={() => setIsLayoutEffect(!isLayoutEffect)}>
          Change to {!isLayoutEffect ? 'useLayoutEffect' : 'useEffect'}
        </Button>
        <AbsoluteBox ref={absoluteBoxRef} onClick={handleSetShow} />
        <BottomMessage outerRef={absoluteBoxRef} show={show} isLayoutEffect={isLayoutEffect} />
    </div>
  );
}

export default UseLayoutEffectPage;