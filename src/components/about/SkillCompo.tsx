import styled from '@emotion/styled';
import React from 'react';
import TextDefault from '../ui/TextDefault';

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

const SkillCompo = () => {
    return (
      <ul>  
        {/* Front-End - 시작 */}
        <SkillItem>
          <ContentItemLeft>
            <TextDefault size="lg" weight="medium" color="orange" lineHeight="md">
              Front-End
            </TextDefault>
          </ContentItemLeft>
          <SubItems>
            <SubItem>
              <TextDefault size="md" weight="light" lineHeight="md">
                o JavaScript(ES6+) / Typescript / HTML5 / CSS / SCSS
              </TextDefault>
            </SubItem>
            <SubItem>
              <TextDefault size="md" weight="light" lineHeight="md">
                o React.js / Redux / Redux-Saga / Next.js
              </TextDefault>
            </SubItem>
            <SubItem>
              <TextDefault size="md" weight="light" lineHeight="md">
                o Webpack / yarn / npm
              </TextDefault>
            </SubItem>
          </SubItems>
        </SkillItem>
        {/* Front-End - 끝 */}

        {/* Back-End - 시작 */}
        <SkillItem>
          <ContentItemLeft>
            <TextDefault size="lg" weight="medium" color="orange" lineHeight="md">
              Back-End
            </TextDefault>
          </ContentItemLeft>
          <SubItems>
            <SubItem>
              <TextDefault size="md" weight="light" lineHeight="md">
                o Java 8
              </TextDefault>
            </SubItem>
            <SubItem>
              <TextDefault size="md" weight="light" lineHeight="md">
                o Spring Boot / Node.js
              </TextDefault>
            </SubItem>
            <SubItem>
              <TextDefault size="md" weight="light" lineHeight="md">
                o AWS(EC2)
              </TextDefault>
            </SubItem>
            <SubItem>
              <TextDefault size="md" weight="light" lineHeight="md">
                o Restful API
              </TextDefault>
            </SubItem>
          </SubItems>
        </SkillItem>
        {/* Back-End - 끝 */}
        
        {/* DevOps - 시작 */}
        <SkillItem>
          <ContentItemLeft>
            <TextDefault size="lg" weight="medium" color="orange" lineHeight="md">
                DevOps
            </TextDefault>
          </ContentItemLeft>
          <SubItems>
            <SubItem>
              <TextDefault size="md" weight="light" lineHeight="md">
                o Mysql
              </TextDefault>
            </SubItem>
          </SubItems>
        </SkillItem>
        {/* DevOps - 끝 */}

        {/* Mobile - 시작 */}
        <SkillItem>
          <ContentItemLeft>
            <TextDefault size="lg" weight="medium" color="orange" lineHeight="md">
                Mobile
            </TextDefault>
          </ContentItemLeft>
          <SubItems>
            <SubItem>
              <TextDefault size="md" weight="light" lineHeight="md">
                o Android
              </TextDefault>
            </SubItem>
          </SubItems>
        </SkillItem>
        {/* Mobile - 끝 */}
        
        {/* Tools - 시작 */}
        <SkillItem>
          <ContentItemLeft>
            <TextDefault size="lg" weight="medium" color="orange" lineHeight="md">
                Tools
            </TextDefault>
          </ContentItemLeft>
          <SubItems>
            <SubItem>
              <TextDefault size="md" weight="light" lineHeight="md">
                o Github / SVN / Slack / Zeplin
              </TextDefault>
            </SubItem>
          </SubItems>
        </SkillItem>
        {/* Tools - 끝 */}
      </ul>
    );
};

export default SkillCompo;