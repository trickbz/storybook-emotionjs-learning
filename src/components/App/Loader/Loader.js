/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

// styles
import * as s from "./Loader.styles";

function Loader(props) {
  const {
    show
  } = props;
  
  return (
    <div css={css`
      ${s.loader};
      ${show && s.show};
    `}>
      <div css={s.dot} />
      <div css={s.dot} />
      <div css={s.dot} />
    </div>
  )
}

Loader.propTypes = {
  show: PropTypes.bool
}

Loader.defaultProps = {
  show: false
}

export default Loader;
