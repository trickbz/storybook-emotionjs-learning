import { useRef, useLayoutEffect, useEffect } from "react";

// helpers
import { moveElementBelowOther } from "../helpers/domHelper";

export const useMoveElementBelowOtherHook = (outerRef, isLayoutEffect = true) => {
  const ref = useRef(null);
  
  useLayoutEffect(() => {
    isLayoutEffect && moveElementBelowOther(ref, outerRef);
  }, [outerRef, isLayoutEffect]);

  useEffect(() => {
    !isLayoutEffect && moveElementBelowOther(ref, outerRef);
  }, [outerRef, isLayoutEffect]);      

  return ref;
};