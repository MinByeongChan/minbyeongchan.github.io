import React from 'react';

import styled from '@emotion/styled';
import Link from 'next/link';

import { color, fontSize, fontWeight } from '../utils/StyleTheme';

const NavLayout = styled.nav(() => ({
  width: '100%',
  height: '67px',
  borderBottom: `1px solid ${color.darkWhite}`,
}));

const NavContainer = styled.div(() => ({
  width: '100%',
  height: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
}));

const NavUl = styled.ul(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100%',
}));

const NavLi = styled.li(() => ({
  position: 'relative',
  height: '100%',
  lineHeight: '68px',
  transition: '0.1s linear',
  '.bottom-line': {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '0px',
    backgroundColor: color.darkslategray,
    transition: '0.1s linear',
  },
  ':hover span': {
    opacity: '0.7',
  },
  ':hover .bottom-line': {
    height: '4px',
  },
}));

const Text = styled.span`
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.bold};
  padding: 0 16px;
`;

const Navbar = () => (
  <NavLayout>
    <NavContainer>
      <NavUl>
        <NavLi>
          <Link href="/">
            <a>
              <Text>Blog</Text>
            </a>
          </Link>
          <div className="bottom-line" />
        </NavLi>
        <NavLi>
          <Link href="/about/">
            <a>
              <Text>About</Text>
            </a>
          </Link>
          <div className="bottom-line" />
        </NavLi>
        <NavLi>
          <Link href="/tags/">
            <a>
              <Text>Tags</Text>
            </a>
          </Link>
          <div className="bottom-line" />
        </NavLi>
      </NavUl>
    </NavContainer>
  </NavLayout>
);

export default Navbar;
