/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

// components
import Button from "../Button";

const getRandomColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

function RandomColoredButton(props) {
  const { children, ...otherProps } = props;

  return (
    <Button 
      {...otherProps}
      styles={css`
        background-color: ${getRandomColor()};
      `}
    >
      {children}
    </Button>
  )
}

export default React.memo(RandomColoredButton);