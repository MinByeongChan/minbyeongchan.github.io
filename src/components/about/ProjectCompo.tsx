import styled from '@emotion/styled';
import React from 'react';
import TextDefault from '../ui/TextDefault';

const ProjTop = styled.div`
  margin-top: 50px
`;
const ListItems = styled.ul`
  padding-left: 10px;
`;
const ListItem = styled.li`
  align-items: start;
`;

// https://play.google.com/store/apps/details?id=kr.co.ksnet.ksta
const ProjectCompo = () => {
    return (
      <>
        {/* 테크넷 - 시작 */}
        <div>
          <TextDefault size="md" weight="light" lineHeight="md">
            2020.11 – 현재
          </TextDefault>
        </div>
        <TextDefault size="xg" weight="bold" lineHeight="xg">
          테크넷
        </TextDefault>
        <ListItems>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o 프론트엔드 개발 담당
            </TextDefault>
          </ListItem>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o 사내 개발자 및 영업사원들에게 서비스관련 정보를 제공하기 위한 웹사이트
            </TextDefault>
          </ListItem>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o 시스템 및 프로젝트 관련 API 연동 개발
            </TextDefault>
          </ListItem>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o 라우터 및 화면, react-spring을 적용한 애니메이션 개발
            </TextDefault>
          </ListItem>          
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o Redux-Saga를 사용하여 비동기 통신 개발 및 사이드 이펙트 제어
            </TextDefault>
          </ListItem>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o JavaScript (ES6), HTML5, CSS, SCSS, React.js, Redux-Saga사용
            </TextDefault>
          </ListItem>
        </ListItems>
        {/* 테크넷 - 끝 */}

        {/* KSTA - 시작 */}
        <ProjTop>
          <TextDefault size="md" weight="light" lineHeight="md">
            2020.04 – 2020.10 (개발 이후 유지보수)
          </TextDefault>
        </ProjTop>
        <TextDefault size="xg" weight="bold" lineHeight="xg">
          KSTA
        </TextDefault>
        <ListItems>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o 프론트엔드 및 안드로이드 개발 담당
            </TextDefault>
          </ListItem>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o KSNET VAN/PG 가맹점에 대한 매출정보확인 앱 리뉴얼
            </TextDefault>
          </ListItem>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o 웹 뷰 화면 개발
            </TextDefault>
          </ListItem>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o 가맹점 매출정보 확인 API 연동 개발
            </TextDefault>
          </ListItem>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o UI/UX 컴포넌트 개발, SPA 관련 모듈 개발
            </TextDefault>
          </ListItem>
          <ListItem>
            <TextDefault size="md" weight="light" lineHeight="md">
              o JavaScript, HTML5, CSS, jQuery, AJAX Promise 패턴 사용
            </TextDefault>
          </ListItem>
        </ListItems>
        {/* KSTA - 끝 */}

      </>
    );
};

export default ProjectCompo;