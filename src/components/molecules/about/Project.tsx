// dependency
import React from 'react';
import styled from '@emotion/styled';

// components
import Text from '@components/atoms/Text';

export default function Project() {
  const projectList = [
    {
      name: '코디매칭 서비스',
      company: '코웨이',
      period: '2022.04 – 현재',
      performances: [
        'o 코웨이 코디매칭 서비스 F/E 담당',
        'o 기술스택: React, Typescript, React-Query, jotai, vite, jest',
      ],
      attachment: {
        pharse: '매칭서비스 링크',
        link: 'https://matching.coway.com',
      },
    },
    {
      name: '통합회원 어드민',
      company: '코웨이',
      period: '2021.11 – 2022.02',
      performances: [
        'o 코웨이 대내 회원 서비스의 어드민 F/E 담당',
        'o 기술스택: React, Typescript, Redux(RTK / redux-thunk), CRA',
      ],
      attachment: null,
    },
    {
      name: 'KSTA',
      company: '케이에스넷',
      period: '2020.04 – 2021.09',
      performances: [
        'o KSNET VAN/PG 가맹점에 대한 매출정보확인 앱 리뉴얼 및 서비스 유지보수',
        'o 기술스택: JavaScript, HTML5, CSS, jQuery',
      ],
      attachment: null,
    },
    {
      name: '테크넷',
      company: '케이에스넷',
      period: '2020.11 – 2021.03',
      performances: [
        'o 사내 개발자 및 영업사원들에게 서비스관련 정보를 제공하기 위한 웹사이트',
        'o 기술스택: JavaScript (ES6), HTML5, CSS, SCSS, React, Redux-Saga',
      ],
      attachment: null,
    },
  ];

  return (
    <>
      {projectList.map((project, id) => (
        <ProjectListWrapper key={id}>
          <div>
            <Text size="md" weight="light" lineHeight="md">
              {project.period}
            </Text>
          </div>

          <Text size="xg" weight="bold" lineHeight="xg">
            {project.name}
          </Text>

          <ListItems>
            {project.performances.map((performance, performanceId) => (
              <ListItem key={performanceId}>
                <Text size="md" weight="light" lineHeight="md">
                  {performance}
                </Text>
              </ListItem>
            ))}
          </ListItems>
          {project.attachment && (
            <div>
              <Text size="sm" weight="bold" lineHeight="md" color="lightBlue">
                <HoverLink href={project.attachment.link}>{project.attachment.pharse}</HoverLink>
              </Text>
            </div>
          )}
        </ProjectListWrapper>
      ))}
    </>
  );
}

const ListItems = styled.ul`
  padding-left: 10px;
`;
const ListItem = styled.li`
  align-items: start;
`;
const HoverLink = styled.a`
  transition: 0.1s linear;
  &:hover {
    box-shadow: 0px 1px 0px;
  }
`;
const ProjectListWrapper = styled.div(() => ({
  marginBottom: '20px',
}));
