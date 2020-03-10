import { css } from "@emotion/core";

const height = 25;
const borderWidth = 1;
const containerPadding = 1;
const sliderHeight = height - 4 * borderWidth - 2 * containerPadding;
const containerWidth = height * 2;

export const container = css`
  padding: ${containerPadding}px;
  border: ${borderWidth}px solid lightgrey;
  border-radius: ${height}px;
  height: ${height}px;
  display: flex;
  width: ${containerWidth}px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #666;
  position: relative;
  align-items: center;
  user-select: none;
  display: inline-block;
`;

export const slider = css`
  height: ${sliderHeight}px;
  width: ${sliderHeight}px;
  border-radius: ${height}px;
  border: ${borderWidth}px solid lightgrey;  
  background-color: white;
  transition: left .2s;
  position: absolute;
  left: ${2 * containerPadding}px;
  top: ${containerPadding + borderWidth}px;
  box-sizing: border-box;
`;

export const sliderSelected = css`
  left: ${containerWidth - sliderHeight - 2 * borderWidth - containerPadding}px;
`;

export const selectedContainer = css`
  background-color: #388e3c;
`;

export const disabledContainer = css`
  background-color: darkgrey;
  cursor: not-allowed;
`;
