import { css } from "@emotion/core";

export const activeLinkStyle = css`
  &.selected {
    text-decoration: none;
    color: inherit;
    cursor: default;
  }
`;

export const menuItem = css`
  display: inline-block;
  
  &:not(:last-child) {
    margin-right: 10px;
  }
`;