/** @jsx jsx */
import PropType from "prop-types";
import { jsx } from "@emotion/core";

// styles
import { pageContainer } from "./Page.styles";

function Page(props) {
  const {
    title,
    children
  } = props;
  
  return (
    <div css={pageContainer}>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  )
}

Page.propTypes = {
  title: PropType.string,
  children: PropType.node
}

export default Page;
