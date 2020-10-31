import React from 'react';
import { useTransition } from 'react-spring';

import * as s from './styles';

const NavBar = ({ isOpen, children }) => {
  const transitions = useTransition(isOpen, null, {
    from: { transform: 'translateX(-240px)' },
    enter: { transform: 'translateX(0px)' },
    leave: { transform: 'translateX(-240px)' },
    config: { duration: 300 }
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <s.Container key={key} style={props}>
              {children}
            </s.Container>
          )
      )}
    </>
  );
};

export default NavBar;
