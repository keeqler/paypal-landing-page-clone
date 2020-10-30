import React from 'react';
import { CSSTransition } from 'react-transition-group';

import * as s from './styles';

const NavBar = ({ isOpen, children }) => (
  <s.Container
    initial={{ transform: 'translateX(-240px)' }}
    animate={isOpen ? { transform: 'translateX(0px)' } : { transform: 'translateX(-240px)' }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </s.Container>
);
export default NavBar;
