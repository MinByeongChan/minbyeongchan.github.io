// dependency
import React from 'react';
import styled from '@emotion/styled';
import { color } from '@utils/StyleTheme';
import { default as CheckIcon } from '@assets/check.svg';

// components
import Text from '@components/atoms/Text';

const KstaCard = () => {
  return (
    <CardContainer>
      <CardItem>
        <CardItemLeft>
          <Text size="h1" weight="bold" color="white">
            KSTA
          </Text>
          <div style={{ margin: '0 0 30px 0' }}>
            <Text size="xg" color="white">
              (Webview Android App)
            </Text>
          </div>

          <div>
            <Text size="lg" weight="bold" color="white">
              KSNET 가맹점 매출내역 및 전표 조회 App
            </Text>

            <div style={{ margin: '15px 0 0 0' }}>
              <Text size="md" weight="bold" color="white">
                앱 페이지와 back-end API와 연동하여 매출 관리 개발을 담당했습니다.
                <br /> 사용자에게 편의성을 제공하기위해 직관적인 UI/UX를 사용하여 개발을
                완료했습니다.
              </Text>
            </div>

            <DescItems>
              <DescItem>
                <IconWrapper>
                  <CheckIcon width="16px" height="16px" />
                </IconWrapper>
                <Text size="md" color="white">
                  Front-End 영역 개발 담당
                </Text>
              </DescItem>
              <DescItem>
                <IconWrapper>
                  <CheckIcon width="16px" height="16px" />
                </IconWrapper>
                <Text size="md" color="white">
                  Back-End 매출 내역 API 연동 개발
                </Text>
              </DescItem>
              <DescItem>
                <IconWrapper>
                  <CheckIcon width="16px" height="16px" />
                </IconWrapper>
                <Text size="md" color="white">
                  UI/UX 개발
                </Text>
              </DescItem>
            </DescItems>
          </div>
        </CardItemLeft>
      </CardItem>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 505px;
  background-color: ${color.dodgerblue};
  margin: 20px auto;
  border-radius: 12px;
  padding: 20px 40px;
  overflow: hidden;

  @media screen and (min-width: 0px) and (max-width: 768px) {
    min-height: 650px;
    padding: 40px 20px;
  }
`;
const CardItem = styled.div`
  width: 100%;
  min-height: 460px;
  display: grid;
  grid-gap: 20px;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);

  background-size: contain;
  background-position: 88% 100%;
  align-content: center;
  background-repeat: no-repeat;
  background-image: url('/images/ksta.png');

  @media screen and (min-width: 0px) and (max-width: 768px) {
    min-height: 550px;

    background-size: 87%;
    background-position: top;
    align-content: flex-end;
    background-image: url('/images/ksta.png');
  }
`;
const CardItemLeft = styled.div`
  grid-column: 1/7;
  align-self: center;

  @media screen and (min-width: 0px) and (max-width: 768px) {
    grid-column: 1/-1;

    background-size: 80vw;
    background-position: top;
    background-repeat: no-repeat;
    align-content: flex-end;
    background-image: url('/images/ksta.png');
    background: linear-gradient(180deg, rgba(40, 35, 135, 0), #1e90ff 12%, #1e90ff);
  }
`;
const DescItems = styled.ul`
  margin: 15px 0 0 5px;
`;
const DescItem = styled.li`
  display: flex;
  align-items: center;
  margin: 3px 0;
`;
const IconWrapper = styled.div`
  margin: 0 8px 0 0;
  color: ${color.white};
  width: 16px;
  height: 16px;
`;

export default KstaCard;
