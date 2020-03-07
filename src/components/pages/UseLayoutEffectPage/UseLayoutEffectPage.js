/** @jsx jsx */
import { useState, useCallback, useRef, forwardRef } from "react";
import { css, jsx } from "@emotion/core";

// components
import Button from "../../Button";

// constants
import { LOCAL_STORAGE_ACTIVE_EFFECT_HOOK_KEY } from "../../../constants/localStorageConstants";

// hooks
import { useMoveElementBelowOtherHook } from "../../../hooks/moveBelowHook";
import { useLocalStorage } from "../../../hooks/localStorageHooks";

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
  const [isLayoutEffect, setIsLayoutEffect] = useLocalStorage(
    LOCAL_STORAGE_ACTIVE_EFFECT_HOOK_KEY, false
  );
  
  const handleSetShow = useCallback(() => {
    setShow(!show);
  }, [show]);
  const absoluteBoxRef = useRef(null);
  
  return (
    <div>
        <h2>UseLayoutEffect hook</h2>
        <ol>
            <li>Switch to this page using menu to see bottom message flickering while positioning bellow the red box</li>
            <li>Change useEffect to useLayoutEffect and do #1 to see that message stops flickering</li>
        </ol>
        Hook used: <b css={css`margin-right: 10px;`}>{isLayoutEffect ? 'useLayoutEffect' : 'useEffect'}</b>
        <Button onClick={() => setIsLayoutEffect(!isLayoutEffect)}>
          Change to {!isLayoutEffect ? 'useLayoutEffect' : 'useEffect'}
        </Button>
        <AbsoluteBox ref={absoluteBoxRef} onClick={handleSetShow} />
        <BottomMessage outerRef={absoluteBoxRef} show={show} isLayoutEffect={isLayoutEffect} />
    </div>
  );
}

export default UseLayoutEffectPage;