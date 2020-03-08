/** @jsx jsx */
import PropType from "prop-types";
import { jsx } from "@emotion/core";

// styles
import { pageContainer } from "./Page.style";

function Page(props) {
  const {
    title,
    children
  } = props;
  
  return (
    <div css={pageContainer}>
      <div>{title}</div>
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
