/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// selectors
import { selectShowLoader } from "../../../selectors/loaderSelectors";

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

function mapStateToProps(state) {
  const show = selectShowLoader(state);
  
  return {
    show
  }
}

export default connect(mapStateToProps)(Loader);
