import Text from '@components/atoms/Text';
import styled from '@emotion/styled';
import React from 'react';

const SkillCompo = () => {
  return (
    <ul>
      {/* Front-End - 시작 */}
      <SkillItem>
        <ContentItemLeft>
          <Text size="lg" weight="medium" color="orange" lineHeight="md">
            Front-End
          </Text>
        </ContentItemLeft>
        <SubItems>
          <SubItem>
            <Text size="md" weight="light" lineHeight="md">
              o JavaScript(ES6+) / Typescript / HTML5 / CSS / SCSS
            </Text>
          </SubItem>
          <SubItem>
            <Text size="md" weight="light" lineHeight="md">
              o React.js / Redux / Redux-Saga / Next.js
            </Text>
          </SubItem>
          <SubItem>
            <Text size="md" weight="light" lineHeight="md">
              o yarn / npm
            </Text>
          </SubItem>
        </SubItems>
      </SkillItem>
      {/* Front-End - 끝 */}

      {/* Back-End - 시작 */}
      <SkillItem>
        <ContentItemLeft>
          <Text size="lg" weight="medium" color="orange" lineHeight="md">
            Back-End
          </Text>
        </ContentItemLeft>
        <SubItems>
          <SubItem>
            <Text size="md" weight="light" lineHeight="md">
              o Java 8
            </Text>
          </SubItem>
          <SubItem>
            <Text size="md" weight="light" lineHeight="md">
              o Spring Boot / Node.js
            </Text>
          </SubItem>
          <SubItem>
            <Text size="md" weight="light" lineHeight="md">
              o AWS(EC2)
            </Text>
          </SubItem>
          <SubItem>
            <Text size="md" weight="light" lineHeight="md">
              o Restful API
            </Text>
          </SubItem>
        </SubItems>
      </SkillItem>
      {/* Back-End - 끝 */}

      {/* DevOps - 시작 */}
      <SkillItem>
        <ContentItemLeft>
          <Text size="lg" weight="medium" color="orange" lineHeight="md">
            DevOps
          </Text>
        </ContentItemLeft>
        <SubItems>
          <SubItem>
            <Text size="md" weight="light" lineHeight="md">
              o Mysql
            </Text>
          </SubItem>
        </SubItems>
      </SkillItem>
      {/* DevOps - 끝 */}

      {/* Mobile - 시작 */}
      <SkillItem>
        <ContentItemLeft>
          <Text size="lg" weight="medium" color="orange" lineHeight="md">
            Mobile
          </Text>
        </ContentItemLeft>
        <SubItems>
          <SubItem>
            <Text size="md" weight="light" lineHeight="md">
              o Android
            </Text>
          </SubItem>
        </SubItems>
      </SkillItem>
      {/* Mobile - 끝 */}

      {/* Tools - 시작 */}
      <SkillItem>
        <ContentItemLeft>
          <Text size="lg" weight="medium" color="orange" lineHeight="md">
            Tools
          </Text>
        </ContentItemLeft>
        <SubItems>
          <SubItem>
            <Text size="md" weight="light" lineHeight="md">
              o Github / Slack / Zeplin
            </Text>
          </SubItem>
        </SubItems>
      </SkillItem>
      {/* Tools - 끝 */}
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
