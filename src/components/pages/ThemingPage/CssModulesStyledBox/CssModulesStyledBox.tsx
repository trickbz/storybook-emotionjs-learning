/** @jsx jsx */
import { jsx } from "@emotion/core";

// components
import Label from "../../../Label";

// styles
import s from "./CssModulesStyledBox.module.scss";
import { content } from "./CssModulesStyledBox.style";

function CssModulesStyledBox() {
  return (
    <div
      className={s.container}
    >
      <Label styles={content}>Box</Label>
    </div>
  )
}

export default CssModulesStyledBox;
