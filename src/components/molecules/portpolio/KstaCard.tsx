// dependency
import React from 'react';
import styled from '@emotion/styled';
import { unitColor } from '@utils/StyleTheme';
import kstaImg from '@assets/ksta.png';

// components
import Text from '@components/atoms/Text';
import KstaCardSubList from '@components/molecules/portpolio/KstaCardSubList';

const KstaCard = () => {
  return (
    <CardContainer>
      <CardItem>
        <CardItemLeft>
          <Text tagName="h1" size="h1" weight="bold" color="white">
            KSTA
          </Text>
          <div style={{ margin: '0 0 30px 0' }}>
            <Text size="xg" color="white">
              (Webview Android App)
            </Text>
          </div>

          <Text size="lg" weight="bold" color="white">
            KSNET 가맹점 매출내역 및 전표 조회 App
          </Text>

          <div style={{ margin: '15px 0 0 0' }}>
            <Text weight="bold" color="white">
              앱 페이지와 back-end API와 연동하여 매출 관리 개발을 담당했습니다.
              <br />
              사용자에게 편의성을 제공하기위해 직관적인 UI/UX를 사용하여 개발을 완료했습니다.
            </Text>
          </div>

          <KstaCardSubList />
        </CardItemLeft>
      </CardItem>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 505px;
  background-color: ${unitColor.dodgerblue};
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
  background-image: url('${kstaImg}');

  @media screen and (min-width: 0px) and (max-width: 768px) {
    min-height: 550px;

    background-size: 87%;
    background-position: top;
    align-content: flex-end;
    background-image: url('${kstaImg}');
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
    background-image: url('${kstaImg}');
    background: linear-gradient(180deg, rgba(40, 35, 135, 0), #1e90ff 12%, #1e90ff);
  }
`;

export default KstaCard;
