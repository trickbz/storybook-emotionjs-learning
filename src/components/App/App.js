/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";

// components
import Menu from './Menu';
import Loader from "./Loader";

// styles
import './App.css';

// constants
import MenuConfig from "../../config/menuConfig";

function App(props) {
  const {
    children
  } = props;

  return (
    <div>
      <Menu items={MenuConfig} />
      <Loader />
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
}

export default App;
