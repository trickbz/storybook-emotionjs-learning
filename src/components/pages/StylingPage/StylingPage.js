/** @jsx jsx */
import { jsx } from "@emotion/core";

// components
import Page from "../../Page";
import Select from "../../Select";

// styles
import * as s from "./StylingPage.styles";

function Box(props) {
  const {
    className,
    childrenClassName,
    children
  } = props;
  
  return (
    <div css={className}>
      <div css={childrenClassName}>
        <div className="govno" css={s.subGovno}>div content</div>
        {children}
      </div>
    </div>
  )
}

function HomePage() {
  const options = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 }
  ]
  
  return (
    <div>
      <Page title="Styling">
        <Box 
          className={s.boxClassName} 
          childrenClassName={s.BoxChildrenClassName}
        >
          Box
        </Box>
        <Select 
          options={options} 
          css={s.select}
        />
      </Page>
    </div>
  );
}

export default HomePage;