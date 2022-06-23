// dependency
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

// components
import Nav from '@components/molecules/Nav';
import MainBottom from '@components/molecules/MainBottom';

const Main = () => {
  return (
    <main>
      <Nav />
      <LayoutMain>
        <Outlet />
      </LayoutMain>
      <MainBottom />
    </main>
  );
};

const LayoutMain = styled.section`
  min-height: 650px;
`;

export default Main;
