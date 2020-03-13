import { css, keyframes } from "@emotion/core";

export const loader = css`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 16, 29, 0.5);
  z-index: 1000;
`;

const wave = keyframes`
  0%,
  60%,
  100% {
    transform: initial;
  }

  30% {
    transform: translateY(-15px);
  }  
`;

export const dot = css`
  animation: ${wave} 1.3s linear infinite;
  height: 12px;
  width: 12px;
  background: white;
  border-radius: 50%;
  display: inline-block;

  :not(:last-child) {
    margin-right: 3px;
  }

  &:nth-of-type(2) {
    animation-delay: -1.1s;
  }

  &:nth-of-type(3) {
    animation-delay: -0.9s;
  }  
`;

export const show = css`
  display: flex;
  justify-content: center;
  align-items: center;  
`;
