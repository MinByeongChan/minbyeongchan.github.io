import React from 'react';
import styled from '@emotion/styled';
import { faCheck, faCopyright, faDatabase, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { color, fontSize, fontWeight } from '../../utils/StyleTheme';
import { faAndroid, faAws, faGithub, faJava, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import TextDefault from '../../components/ui/TextDefault';
import AboutLayout from '../../layout/AboutLayout';
import AboutLayout2 from '../../layout/AboutLayout2';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <AboutLayout2 />
    <main
      className="about"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* About me */}
      <AboutLayout no={1}>
        <IntroLayout>
          <ImgLayout>
            <ImgWrapper>
              <img
                alt="profile"
                src='/assets/profile_circle_img.png'
                style={{
                  position: 'absolute',
                }}
              />
            </ImgWrapper>
          </ImgLayout>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <TextDefault size="h1" weight='bold' color="darkslategray">
              민 병 찬
            </TextDefault>
            <TextDefault size="xxg" weight='bold' color="darkslategray">
              부지런해지고 싶은 개발자
            </TextDefault>
            <TextDefault size="lg" color="darkslategray">
              Front-end Developer in Seoul,
            </TextDefault>
            <TextDefault size="lg" color="darkslategray" style={{ margin: '5px 0 0 0' }}>
              안드로이드 앱부터 시작해서 현재는 웹을 개발하고 있는 2년차 개발자 입니다. 프론트엔드
              개발은 바로 눈으로 볼 수 있어 직관적이라는 점에 빠져 개발하고 있습니다. 사람들과
              소통하고 프로젝트를 수행하는 것을 좋아합니다.
            </TextDefault>
          </div>
        </IntroLayout>
      </AboutLayout>

      {/* Programming Language Skill */}
      <AboutLayout no={2}>
        <article>
          <div style={{ margin: '0 0 20px 0' }}>
            <TextDefault size="xxg" weight='bold'>
              기술 스택
            </TextDefault>
          </div>
          <SkillRow>
            <div style={{ margin: '0 0 10px 0' }}>
              <TextDefault size="lg">Front End</TextDefault>
            </div>
            <div
              style={{
                padding: '2px',
                borderRadius: '2px',
                display: 'flex',
                flexFlow: 'wrap',
              }}
            >
              <SkillLayout>
                <span>
                  <FontAwesomeIcon icon={faReact} size="1x" />
                </span>
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  React / Redux / Redux-saga / jQuery
                </TextDefault>
              </SkillLayout>
            </div>
          </SkillRow>
          <SkillRow>
            <div style={{ margin: '0 0 10px 0' }}>
              <TextDefault size="lg">Back End</TextDefault>
            </div>
            <div
              style={{
                padding: '2px',
                borderRadius: '2px',
                display: 'flex',
                flexFlow: 'wrap',
              }}
            >
              <SkillLayout>
                <FontAwesomeIcon icon={faAws} size="1x" />
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  AWS EC2
                </TextDefault>
              </SkillLayout>
              <SkillLayout>
                <FontAwesomeIcon icon={faNodeJs} size="1x" />
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  Node.js / Express
                </TextDefault>
              </SkillLayout>
              <SkillLayout>
                <FontAwesomeIcon icon={faExchangeAlt} size="1x" />
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  Rest API
                </TextDefault>
              </SkillLayout>
            </div>
          </SkillRow>
          <SkillRow>
            <div style={{ margin: '0 0 10px 0' }}>
              <TextDefault size="lg">Language</TextDefault>
            </div>
            <div
              style={{
                padding: '2px',
                borderRadius: '2px',
                display: 'flex',
                flexFlow: 'wrap',
              }}
            >
              <SkillLayout>
                <FontAwesomeIcon icon={faJs} size="1x" />
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  Javascript(ES6) / Web (HTML5, CSS, SCSS)
                </TextDefault>
              </SkillLayout>
              <SkillLayout>
                <FontAwesomeIcon icon={faJava} size="1x" />
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  Java
                </TextDefault>
              </SkillLayout>
              {/* <SkillLayout>
                <img
                  alt="kotlin"
                  src={require('../assets/kotlin.png')}
                  style={{ width: '25px', margin: '0' }}
                />
                <TextDefault size="lg" style={{ margin: '0 10px' }}>
                  Kotlin
                </TextDefault>
              </SkillLayout> */}
              <SkillLayout>
                <FontAwesomeIcon icon={faCopyright} size="1x" />
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  C/C++
                </TextDefault>
              </SkillLayout>
            </div>
          </SkillRow>
          <SkillRow>
            <div style={{ margin: '0 0 10px 0' }}>
              <TextDefault size="lg">Database</TextDefault>
            </div>
            <div
              style={{
                padding: '2px',
                borderRadius: '2px',
                display: 'flex',
                flexFlow: 'wrap',
              }}
            >
              <SkillLayout>
                <FontAwesomeIcon icon={faDatabase} size="1x" />
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  Mysql / MongoDB
                </TextDefault>
              </SkillLayout>
            </div>
          </SkillRow>
          <SkillRow>
            <div style={{ margin: '0 0 10px 0' }}>
              <TextDefault size="lg">ETC</TextDefault>
            </div>
            <div
              style={{
                padding: '2px',
                borderRadius: '2px',
                display: 'flex',
                flexFlow: 'wrap',
              }}
            >
              <SkillLayout>
                <span style={{ color: 'rgb(48,215,128)' }}>
                  <FontAwesomeIcon icon={faAndroid} size="1x" />
                </span>
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  Android
                </TextDefault>
              </SkillLayout>
              <SkillLayout>
                <FontAwesomeIcon icon={faGithub} size="1x" />
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  Github
                </TextDefault>
              </SkillLayout>
              <SkillLayout>
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  SVN
                </TextDefault>
              </SkillLayout>
            </div>
          </SkillRow>
        </article>
      </AboutLayout>  
    </main>
  </Main>
);

const IntroLayout = styled.article((props) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '20px 80px',
  '@media  (min-width: 0px) and (max-width: 820px)': {
    flexDirection: 'column',
    margin: '20px',
  },
}));
const ImgLayout = styled.div(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '0 80px 0 0',
  '@media  (min-width: 0px) and (max-width: 820px)': {
    justifyContent: 'center',
    margin: '0',
  },
}));

const ProjWrapper = styled.div((props) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media  (min-width: 0px) and (max-width: 768px)': {
    justifyContent: 'center',
    margin: '10px 0 0 0',
  },
}));

const ImgLayout2 = styled.div(() => ({
  width: '320px',
  height: '100%',
  margin: '0 45px 0 0',
  justifyContent: 'space-between',
  zIndex: '1',
  '@media  (min-width: 769px) and (max-width: 1050px)': {
    margin: '0 35px 0 0',
  },
  '@media  (min-width: 0px) and (max-width: 768px)': {
    display: 'none',
    alignItems: 'center',
    margin: '0',
  },
}));

const IframeLayout = styled.iframe((props) => ({
  width: '380px',
  height: '500px',
  '@media  (min-width: 769px) and (max-width: 1050px)': {
    margin: '0 35px 0 0',
  },
  '@media  (min-width: 0px) and (max-width: 768px)': {
    display: 'none',
    alignItems: 'center',
    margin: '0',
  },
}));

const ImgWrapper = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  width: '200px',
  height: '200px',
  margin: '0 0 20px 0',
  borderRadius: '50%',
  backgroundColor: color.darkgray,
  boxShadow: `0px 2px 4px 3px rgb(0 0 0 / 10%)`,
  '@media  (min-width: 0px) and (max-width: 820px)': {
    width: '150px',
    height: '150px',
  },
}));

const TopImgWrapper = styled.div((props) => ({
  position: 'absolute',
  left: '0',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: 'rgb(130, 130, 130)',
  textAlign: 'center',
  margin: '0 15px 0 0',
}));

const SkillRow = styled.div((props) => ({
  width: '100%',
  margin: '0 0 10px 0',
  '@media  (min-width: 0px) and (max-width: 499px)': {
    margin: '0 0 5px 0',
  },
}));

const SkillRowLeft = styled.div((props) => ({
  width: '140px',
  minWidth: '140px',
  fontSize: fontSize.lg,
  padding: '3px 20px 0 0',
}));

const SkillLayout = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: color.darkWhite,
  padding: '2px 10px',
  margin: '3px 3px 3px 0',
  borderRadius: '5px',
}));

const SkillContent = styled.div((props) => ({
  fontSize: fontSize.md,
  margin: '4px 10px',
}));

export default About;
