import React, { ReactNode } from 'react';

import styled from '@emotion/styled';

import Navbar from '../navigation/Navbar';
import { color, fontWeight } from '../utils/StyleTheme';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const LayoutMain = styled.main`
  min-height: 650px;
`;

const BottomWrapper = styled.footer`
  width: 100%;
  background-color: ${color.black};
  text-align: center;
  padding: 60px 30px;
  color: ${color.white};
  a {
    color: ${color.orange};
    font-weight: ${fontWeight.bold};
  }
`;
const BottomContainer = styled.div`
  min-width: 1200px;
  margin: 0 auto;
`;

const Main: React.FC<IMainProps> = (props: IMainProps) => (
  <>
    {props.meta}

    <section>
      <Navbar />

      <LayoutMain>{props.children}</LayoutMain>

      <BottomWrapper>
        <BottomContainer>
          <span>© Copyright {new Date().getFullYear()} Powered with</span>
          <a href="https://github.com/MinByeongChan"> Byeong Chan</a>
        </BottomContainer>
      </BottomWrapper>
    </section>
  </>
);

export { Main };
