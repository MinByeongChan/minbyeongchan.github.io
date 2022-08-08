import Text from '@components/atoms/Text';
import styled from '@emotion/styled';
import React from 'react';

const ListItems = styled.ul`
  padding-left: 10px;
`;
const ListItem = styled.li`
  display: flex;
  align-items: start;
`;

export default function WorkExperience() {
  const workExpList = [
    {
      company: '코웨이',
      location: '서울',
      role: '프론트엔드 개발',
      workPeriod: '2021.09 - 현재',
      performance: [
        'o 프론트엔드개발팀에서 웹페이지 개발',
        'o 통합회원 어드민, 대내에서 사용하는 관리자 웹페이지',
        'o 매칭서비스 F/E, 고객이 편리하게 렌탈할 수 있는 매칭서비스의 FE 메인 담당',
        'o 기술스택: React, TypeScript, vite, webpack, React-Query, jotai, cypress, jest',
      ],
    },
    {
      company: 'KSNET',
      location: '서울',
      role: 'FE/AOS 개발',
      workPeriod: '2020.02 - 2021.09',
      performance: [
        'o 모바일파트 웹앱 및 웹페이지 개발',
        'o KSTA Mobile 개발, KSNET VAN 가맹점 매출정보 확인 앱',
        'o 테크넷 개발, KSNET 기술본부 개발 이슈관리 및 영업지원 웹 페이지 개발',
        'o 프론트엔드 (JavaScript, HTML, CSS, React.js) 개발',
      ],
    },
  ];

  return (
    <>
      {workExpList.map((data, id) => (
        <WorkItemsWrapper key={id}>
          <div>
            <Text weight="light" lineHeight="xs">
              {data.workPeriod}
            </Text>
          </div>

          <Text size="xg" weight="bold" lineHeight="lg">
            {data.company}
          </Text>
          <Text size="lg" lineHeight="lg">
            , {data.location} ({data.role})
          </Text>
          <ListItems>
            {data.performance.map((detail, id) => (
              <ListItem key={id}>
                <Text weight="light" lineHeight="md">
                  {detail}
                </Text>
              </ListItem>
            ))}
          </ListItems>
        </WorkItemsWrapper>
      ))}
    </>
  );
}

const WorkItemsWrapper = styled.div(() => ({
  marginBottom: '30px',
}));
