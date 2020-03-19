/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";

function App(props) {
  const {
    children
  } = props;

  return (
    <div>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
