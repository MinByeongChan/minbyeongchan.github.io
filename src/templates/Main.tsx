import React, { ReactNode } from 'react';

import styled from '@emotion/styled';

import Navbar from '../navigation/Navbar';
import { color, fontWeight } from '../utils/StyleTheme';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout = styled.main(() => ({
  maxWidth: '1200px',
  margin: '0 auto',
}));

const BottomWrapper = styled.div`
  text-align: center;
  padding: 30px 0;
  a {
    color: ${color.orange};
    font-weight: ${fontWeight.bold};
  }
`;

const Main: React.FC<IMainProps> = (props: IMainProps) => (
  <Layout>
    {props.meta}

    <section>
      <Navbar />

      <section>{props.children}</section>

      <BottomWrapper>
        <span>© Copyright {new Date().getFullYear()} Powered with</span>
        <a href="https://github.com/MinByeongChan"> Byeong Chan</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </BottomWrapper>
    </section>
  </Layout>
);

export { Main };
