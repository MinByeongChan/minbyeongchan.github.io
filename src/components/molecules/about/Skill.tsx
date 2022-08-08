// dependency
import React from 'react';
import styled from '@emotion/styled';

// components
import Text from '@components/atoms/Text';

const SkillCompo = () => {
  const list = [
    {
      title: 'Front-End',
      subList: [
        'o 언어 : JavaScript(ES6+) / Typescript / HTML5 / CSS / SCSS',
        'o 퍼블리싱 : HTML5 / CSS / SCSS / emotion',
        'o 스토어 : jotai / React-Query / Redux(RTK) / Redux-Saga, Redux-Thunk',
        'o Bundler : Webpack 5 / vite',
        'o Restful API',
      ],
    },
    {
      title: 'Infra',
      subList: ['o AWS EC2, AWS S3, AWS CloudFront'],
    },
    {
      title: 'Mobile',
      subList: ['o Android'],
    },
    {
      title: 'Tools',
      subList: ['o Github / Slack / Zeplin / Jira'],
    },
  ];

  return (
    <ul>
      {list.map((data, id) => (
        <SkillItem key={id}>
          <ContentItemLeft>
            <Text size="lg" weight="medium" color="orange" lineHeight="md">
              {data.title}
            </Text>
          </ContentItemLeft>
          <SubItems>
            {data.subList.map((subItem, subItemId) => (
              <SubItem key={subItemId}>
                <Text size="md" weight="light" lineHeight="md">
                  {subItem}
                </Text>
              </SubItem>
            ))}
          </SubItems>
        </SkillItem>
      ))}
    </ul>
  );
};

const SkillItem = styled.li`
  display: flex;
  align-items: start;
  margin-top: 10px;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    flex-direction: column;
  } ;
`;
const SubItems = styled.ul`
  padding-left: 10px;
`;
const SubItem = styled.li`
  display: flex;
  align-items: start;
`;
const ContentItemLeft = styled.div`
  min-width: 150px;
`;

export default SkillCompo;
