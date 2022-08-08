// dependency
import React from 'react';
import styled from '@emotion/styled';

// components
import Text from '@components/atoms/Text';

const IntroPhrase = () => {
  const getCareerYears = () => {
    const today = new Date();
    const careerStartDate = new Date(2020, 2, 13); // 2000년 8월 10일
    return today.getFullYear() - careerStartDate.getFullYear() + 1;
  };
  const introPhraseList = [
    'o 프론트엔드 개발은 바로 눈으로 볼 수 있다는 매력에 빠져 개발하고 있습니다.',
    'o 팀원들과 코드로 소통할 수 있는 클린코드를 지향합니다. 최근에는 가독성 높고 유지보수성이 좋은 코드를 짜기위해 노력하고 있습니다.',
    'o 기술 트렌드를 놓치지 않는 것, 그리고 기본을 중요하게 생각합니다. ',
    'o 개발했던 것들을 정리하기 위해 개인 기술블로그 운영하고 있습니다.',
    'o 직접 내려먹는 커피와 싸이클, 헬스 운동을 좋아합니다.',
  ];

  return (
    <ul>
      <IntroItem>
        <Text lineHeight="md" weight="light">
          o 안녕하세요!
        </Text>
        <Text lineHeight="md" weight="bold">
          &nbsp; {getCareerYears()}년차
        </Text>
        <Text lineHeight="md" weight="light">
          &nbsp; 프론트엔드 주니어 개발자 입니다.
        </Text>
      </IntroItem>
      {introPhraseList.map((data, id) => (
        <IntroItem key={id}>
          <Text size="md" lineHeight="md" weight="light">
            {data}
          </Text>
        </IntroItem>
      ))}
    </ul>
  );
};

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

export default IntroPhrase;
