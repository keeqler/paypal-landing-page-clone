import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.nav)`
  width: 240px;
  height: 100%;
  padding: 20px 16px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  transform: translateX(-240px);
  background: radial-gradient(
    circle farthest-side at center bottom,
    var(--blue-4),
    var(--blue-3) 125%
  );
  z-index: 2;
`;
