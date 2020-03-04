export function moveElementBelowOther(ref, outerRef) {
  const rect = outerRef.current.getBoundingClientRect();
  ref.current.style.top = `${rect.height}px`;  
}