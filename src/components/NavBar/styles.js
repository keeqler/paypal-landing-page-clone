import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.nav)`
  width: 240px;
  height: 100%;
  padding: 20px 16px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: radial-gradient(
    circle farthest-side at center bottom,
    var(--blue-4),
    var(--blue-3) 125%
  );
  z-index: 2;
`;
