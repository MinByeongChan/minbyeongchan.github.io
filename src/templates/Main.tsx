import React, { ReactNode } from 'react';

import styled from '@emotion/styled';

import Navbar from '../navigation/Navbar';
import { color, fontSize, fontWeight } from '../utils/StyleTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Provider } from 'react-redux';
import { store } from '../modules/configureStore';
import ModalProvider from '../modal/ModalProvider';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const LayoutMain = styled.main`
  min-height: 650px;
`;

const BottomWrapper = styled.footer`
  background-color: ${color.black};
  padding: 60px 30px;
  color: ${color.white};
  a {
    color: ${color.orange};
    font-weight: ${fontWeight.bold};
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    padding: 40px 20px;
  } ;
`;
const BottomContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BottomContentTitle = styled.div`
  margin-bottom: 20px;
  .footer-title {
    margin: 0 0 10px 0;
    font-size: ${fontSize.xg};
    font-weight: ${fontWeight.bold};
  }
  .footer-subtitle {
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

const BottomContentMid = styled.div`
  .mid-container {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .left-img {
    width: 22px;
    height: auto;
  }
  a {
    font-size: ${fontSize.sm};
    margin-left: 15px;
  }
`;

const BottomContentEnd = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const Main: React.FC<IMainProps> = (props: IMainProps) => (
  <Provider store={store}>
    {props.meta}

    <section>
      <ModalProvider />
      <Navbar />

      <LayoutMain>{props.children}</LayoutMain>

      <BottomWrapper>
        <BottomContainer>
          <BottomContentTitle>
            <p className="footer-title">Byeong Chan's 기술 블로그</p>
            <p className="footer-subtitle">개발했던 것을 정리하기 위한 기술 블로그 입니다.</p>
          </BottomContentTitle>

          <BottomContentMid>
            <div className="mid-container">
              <FontAwesomeIcon className="left-img" icon={faGithubSquare} inverse />
              <a href="https://github.com/MinByeongChan">Byeong Chan</a>
            </div>
            <div className="mid-container">
              <FontAwesomeIcon className="left-img" icon={faEnvelopeOpen} inverse />
              <a href="mailto:mbc0481@naver.com">mbc0481@naver.com</a>
            </div>
            <div className="mid-container">
              <FontAwesomeIcon className="left-img" icon={faPhoneSquareAlt} inverse />
              <a href="tel:01077020481">010-7702-0481</a>
            </div>
          </BottomContentMid>

          <BottomContentEnd>
            <span>© Copyright {new Date().getFullYear()} Powered with</span>
            <a href="https://github.com/MinByeongChan"> Byeong Chan</a>
          </BottomContentEnd>
        </BottomContainer>
      </BottomWrapper>
    </section>
  </Provider>
);

export { Main };
