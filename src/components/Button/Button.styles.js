import { css } from "@emotion/core";

export const button = css`
  cursor: pointer;
`;

export const disabledButton = css`
  background-color: lightgrey;
  color: white;
  border-color: #c5c5c5;
  cursor: not-allowed;
`;

export const roundedButton = css`
  border-radius: 10px;
`;

export const getCommonStyles = ({ rounded, disabled }) => css`
  ${button};
  ${rounded && roundedButton}
  ${disabled && disabledButton};
`;
