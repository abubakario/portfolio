import styled, { keyframes } from 'styled-components';

const spinCW = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;
const spinCCW = keyframes`from { transform: rotate(0deg); } to { transform: rotate(-360deg); }`;
const spinSelfCW = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;
const spinSelfCCW = keyframes`from { transform: rotate(0deg); } to { transform: rotate(-360deg); }`;

export const Div = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  align-items: center;
  z-index: -1;
  overflow: hidden;

  /* Gradient-friendly glow */
  svg {
    width: 700px;
    height: 600px;
    filter: drop-shadow(0 0 5px rgba(0, 224, 255, 0.3));
  }

  /* Global Rotation Classes */
  .spin-slow { animation: ${spinCW} 60s linear infinite; }
  .spin-medium { animation: ${spinCCW} 50s linear infinite; }
  .spin-fast { animation: ${spinCW} 40s linear infinite; }
  .spin-turbo { animation: ${spinCCW} 20s linear infinite; }

  /* Self-Spin Classes (Counter-Rotating Triangles) */
  .spin-self-cw { animation: ${spinSelfCW} 25s linear infinite; }
  .spin-self-ccw { animation: ${spinSelfCCW} 25s linear infinite; }

  g { transform-box: fill-box; transform-origin: center; }
`;