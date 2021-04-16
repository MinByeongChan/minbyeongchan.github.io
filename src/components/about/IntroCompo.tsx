import React from 'react';
import styled from '@emotion/styled';
import TextDefault from '../ui/TextDefault';

const IntroCompo = () => {
    return (
        <ul>
        <IntroItem>
          <TextDefault size="md" lineHeight="md" weight="light">
            o 안녕하세요! {(new Date().getFullYear() - 2020) + 1}년차  
          </TextDefault>
          <TextDefault size="md"  lineHeight="md" weight="bold">
            {" "}프론트엔드 주니어 개발자
          </TextDefault>
          <TextDefault size="md"  lineHeight="md" weight="light">
            {" "}입니다.
          </TextDefault>
        </IntroItem>
        <IntroItem>
          <TextDefault size="md" lineHeight="md" weight="light">
            o 프론트엔드 개발은 바로 눈으로 볼 수 있다는 매력에 빠져 개발하고 있습니다.
          </TextDefault>
        </IntroItem>
        <IntroItem>
          <TextDefault size="md" lineHeight="md" weight="light">
            o 
          </TextDefault>
          <img className="content-icon" src="/assets/images/about/coding.svg" />
          <TextDefault size="md" lineHeight="md" weight="light">
            클린코드를 지향하며, 
          </TextDefault>
          <TextDefault size="md" lineHeight="md" weight="light">
            최근에는 효율높은 디자인패턴과 코드를 짜기위해 노력하고
            있습니다.
          </TextDefault>
        </IntroItem>
        <IntroItem>
          <TextDefault size="md" lineHeight="md" weight="light">
            o 프론트-백엔드을 모두 섭렵하고 있으며 풀스택 개발자를 목표로 하고 있습니다.
          </TextDefault>
        </IntroItem>
        <IntroItem>
          <TextDefault size="md" lineHeight="md" weight="light">
            o 개발했던 것들을 정리하기 위해 개인 기술블로그 운영하고 있습니다.
          </TextDefault>
        </IntroItem>
        <IntroItem>
          <TextDefault size="md" lineHeight="md" weight="light">
              o 
          </TextDefault>
          <img className="content-icon" src="/assets/images/about/coffee-cup.svg" />
          <TextDefault size="md" lineHeight="md" weight="light">
            커피 핸드드립과
          </TextDefault>
          <img className="content-icon" src="/assets/images/about/cycling.svg" />
          <TextDefault size="md" lineHeight="md" weight="light">
            자전거 타는 것을 좋아합니다.
          </TextDefault>
        </IntroItem>
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

export default IntroCompo;