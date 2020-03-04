/** @jsx jsx */
import { useState, useCallback, useRef, forwardRef, useEffect } from "react";
import { css, jsx } from "@emotion/core";

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
      `}
      ref={ref}
      onClick={onClick}
    >
      Click Me
    </div>
  );
})

function setMessagePosition(ref, outerRef) {
  const rect = outerRef.current.getBoundingClientRect();
  ref.current.style.top = `${rect.height}px`;  
}

function BottomMessage({ outerRef, show }) {
  const ref = useRef(null);

  useEffect(() => {
    setMessagePosition(ref, outerRef);
  }, [outerRef]);
  
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
  )
}

function UseLayoutEffect() {
  const [show, setShow] = useState(true);
  
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
        
        <AbsoluteBox ref={absoluteBoxRef} onClick={handleSetShow} />
        <BottomMessage outerRef={absoluteBoxRef} show={show} />
    </div>
  );
}

export default UseLayoutEffect;