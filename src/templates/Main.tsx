import React, { ReactNode } from 'react';

import styled from '@emotion/styled';

import Navbar from '../navigation/Navbar';
import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout= styled.main(() => ({
  maxWidth: '1200px',
  margin: '0 auto',
}));

const Main = (props: IMainProps) => (
  <Layout>
    {props.meta}

    <section>
      <Navbar />

      <section>{props.children}</section>

      <div>
        © Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
        {Config.title}
        {'  '}
        Powered with
        {' '}
        <a href="https://github.com/MinByeongChan">Byeong Chan</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </section>
  </Layout>
);

export { Main };
