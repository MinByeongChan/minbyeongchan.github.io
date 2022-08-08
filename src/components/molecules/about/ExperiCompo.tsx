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

const ExperiCompo = () => {
  return (
    <>
      <div>
        <Text size="md" weight="light" lineHeight="md">
          2020. 02 - 현재
        </Text>
      </div>
      <Text size="xg" weight="bold" lineHeight="lg">
        KSNET, 서울 (WEB/APP 개발자)
      </Text>
      <ListItems>
        <ListItem>
          <Text size="md" weight="light" lineHeight="md">
            o 모바일파트에서 웹앱 및 웹페이지 개발
          </Text>
        </ListItem>
        <ListItem>
          <Text size="md" weight="light" lineHeight="md">
            o KSTA Mobile 개발, KSNET VAN 가맹점 매출정보 확인 앱.
          </Text>
        </ListItem>
        <ListItem>
          <Text size="md" weight="light" lineHeight="md">
            o 테크넷 개발, KSNET 기술본부 개발 이슈관리 및 영업지원 웹 페이지 개발.
          </Text>
        </ListItem>
        <ListItem>
          <Text size="md" weight="light" lineHeight="md">
            o 프론트엔드 (JavaScript, HTML, CSS, React.js) 개발
          </Text>
        </ListItem>
      </ListItems>
    </>
  );
};

export default ExperiCompo;
