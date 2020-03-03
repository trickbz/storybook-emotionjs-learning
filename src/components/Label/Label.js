/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { labelStyles } from "./../../styles/commonStyles";

function Label(props) {
  const {
    children
  } = props;
  
  const theme = useTheme();

  const innerStyles = css`
    display: inline-block;
  `;
  
  return (
    <div
      css={css`
        color: ${theme.colors.controlText};
        background-color: ${theme.colors.controlBackground};
        ${innerStyles};
        ${labelStyles};
      `}
    >
      {children}
    </div>
  )
}

export default Label;