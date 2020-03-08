/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";

// styles
import * as s from "../Label/Label.styles";

function Label(props) {
  const {
    children,
    styles
  } = props;
  
  const { theme } = useTheme();

  return (
    <div
      css={css`
        ${s.getCommonStyles(theme)}
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