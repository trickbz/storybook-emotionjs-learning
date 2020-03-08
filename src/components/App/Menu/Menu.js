/** @jsx jsx */
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { map } from "lodash";
import { jsx } from "@emotion/core";

// styles
import * as s from "./Menu.style";

function Menu(props) {
  const {
    items
  } = props;

  return (
    <ul>
      {map(items, (i, idx) => {
        const { label, route } = i;
        
        return (
          <li 
            key={idx}
            css={s.menuItem}
          >
            <NavLink 
              to={route} 
              exact
              activeClassName="selected"
              css={s.activeLinkStyle}
            >
              {label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

Menu.defaultProps = {
  items: []
}

export default Menu;