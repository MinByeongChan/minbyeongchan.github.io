// dependency
import React from 'react';
import styled from '@emotion/styled';
import profileCircleImg from '@assets/profile_circle_img.png';

// components
import Text from '@components/atoms/Text';

export default function IntroCard() {
  return (
    <IntroWrapper>
      <IntroItems>
        <IntroItem>
          <Text tagName="h1" size="h1" weight="bold" lineHeight="h1" letterSpacing="13">
            민 병 찬
          </Text>
        </IntroItem>
        <IntroItem>
          <Text size="lg" weight="bold" color="orange" lineHeight="xg">
            Front-End Developer
          </Text>
        </IntroItem>
        <IntroItem>
          <Text size="lg" lineHeight="md">
            서울시 구로구 고척동
          </Text>
        </IntroItem>
        <IntroItem>
          <Text weight="bold" lineHeight="md">
            p &nbsp;
          </Text>
          <Text lineHeight="md">
            <a href="tel:01077020481">(+82) 010-7702-0481</a>
          </Text>
        </IntroItem>
        <IntroItem>
          <Text weight="bold" lineHeight="md">
            m &nbsp;
          </Text>
          <Text color="gray2" lineHeight="md">
            <a href="mailto:mbc0481@naver.com">mbc0481@naver.com</a>
          </Text>
        </IntroItem>
        <IntroItem>
          <Text weight="bold" lineHeight="md">
            h &nbsp;
          </Text>
          <Text color="gray2" lineHeight="md">
            <a href="https://minbyeongchan.github.io"> https://minbyeongchan.github.io</a>
          </Text>
        </IntroItem>
        <IntroItem>
          <Text weight="bold" lineHeight="md">
            Github &nbsp;
          </Text>
          <Text color="gray2" lineHeight="md">
            <a href="https://github.com/MinByeongChan">https://github.com/MinByeongChan</a>
          </Text>
        </IntroItem>
      </IntroItems>

      <ProfileImg alt="" src={profileCircleImg} />
    </IntroWrapper>
  );
}

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    flex-direction: column-reverse;
    .content-item2 {
      flex-direction: column;
      align-items: flex-start;
    }
  } ;
`;
const IntroItems = styled.ul`
  min-width: 360px;
`;
const IntroItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .intro-icon {
    display: inline;
    width: 25px;
    height: 25px;
    margin-right: 12px;
  }
  .content-icon {
    display: inline;
    width: 22px;
    height: 22px;
    margin: 0 6px;
  }
`;
const ProfileImg = styled.img`
  width: 220px;
  height: 220px;
  margin-right: 200px;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    margin: 0 0 20px 0;
    width: 200px;
    height: 200px;
  } ;
`;
