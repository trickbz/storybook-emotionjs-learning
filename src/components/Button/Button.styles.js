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

export const getCommonStyles = (theme, { rounded, disabled }) => css`
  color: ${theme.colors.controlText};
  background-color: ${theme.colors.controlBackground};
  border: 1px solid ${theme.colors.controlBorderColor};
  border-radius: ${rounded ? '10px' : '0'};
  ${disabled && disabledButton};
`;
