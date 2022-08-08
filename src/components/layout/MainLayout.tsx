// dependency
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { fontSize } from '@utils/StyleTheme';

// components
import Nav from '@components/molecules/Nav';
import MainBottom from '@components/molecules/MainBottom';

const Main = () => {
  return (
    <>
      <Nav />
      <LayoutMain>
        <Outlet />
      </LayoutMain>
      <MainBottom />
    </>
  );
};

const ResponsiveMainContainer = styled.main`
  @media (min-width: 500px) and (max-width: 820px) {
    h2 {
      font-size: ${fontSize.h3};
    }
    h3 {
      font-size: ${fontSize.xxg};
    }
    span,
    pre,
    p {
      font-size: ${fontSize.md};
    }
  }
  @media (min-width: 0px) and (max-width: 499px) {
    h2 {
      font-size: ${fontSize.xxg};
    }
    h3 {
      font-size: ${fontSize.xxg};
    }
    span,
    pre,
    p {
      font-size: ${fontSize.md};
    }
  } ;
`;

const LayoutMain = styled.section`
  min-height: 650px;
`;

export default Main;
