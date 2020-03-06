/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";

function Label(props) {
  const {
    children,
    styles
  } = props;
  
  const { theme } = useTheme();

  const innerStyles = css`
    display: inline-block;
  `;
  
  return (
    <div
      css={css`
        color: ${theme.colors.controlText};
        background-color: ${theme.colors.controlBackground};
        ${innerStyles};
        ${styles};
      `}
    >
      {children}
    </div>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object
}

export default Label;