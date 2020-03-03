/** @jsx jsx */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { css, jsx } from "@emotion/core";

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
            css={css`
              display: inline-block;
              &:not(:last-child) {
                margin-right: 10px;
              }
            `}
          >
            <Link to={route}>{label}</Link>
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