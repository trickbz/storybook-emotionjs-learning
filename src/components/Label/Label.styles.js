import { css } from "@emotion/core";

export const getCommonStyles = theme => css`
  color: ${theme.colors.controlText};
  background-color: ${theme.colors.controlBackground};
  display: inline-block;  
`;
