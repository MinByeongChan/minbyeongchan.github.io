// dependency
import React from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight } from '@utils/StyleTheme';
import GithubIcon from '@assets/github.svg';
import MailIcon from '@assets/envelope.svg';
import PhoneIcon from '@assets/phone.svg';

const MainBottom = () => {
  return (
    <BottomWrapper>
      <BottomContainer>
        <BottomContentTitle>
          <p className="footer-title">Byeong Chan's 기술 블로그</p>
          <p className="footer-subtitle">개발했던 것을 정리하기 위한 기술 블로그 입니다.</p>
        </BottomContentTitle>

        <BottomContentMid>
          <div className="mid-container">
            <GithubIcon width="22px" height="22px" />
            <a href="https://github.com/MinByeongChan">Byeong Chan</a>
          </div>
          <div className="mid-container">
            <MailIcon width="22px" height="22px" />
            <a href="mailto:mbc0481@naver.com">mbc0481@naver.com</a>
          </div>
          <div className="mid-container">
            <PhoneIcon width="22px" height="22px" />
            <a href="tel:01077020481">010-7702-0481</a>
          </div>
        </BottomContentMid>

        <BottomContentEnd>
          <span>© Copyright {new Date().getFullYear()} Powered with</span>
          <a href="https://github.com/MinByeongChan"> Byeong Chan</a>
        </BottomContentEnd>
      </BottomContainer>
    </BottomWrapper>
  );
};

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
  img {
    width: 24px;
    height: 24px;
    color: ${color.white};
  }
`;

const BottomContentEnd = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export default MainBottom;
