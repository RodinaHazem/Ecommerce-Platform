import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  overflow: hidden;
  transform-origin: center center;
  will-change: transform;
  pointer-events: none;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

