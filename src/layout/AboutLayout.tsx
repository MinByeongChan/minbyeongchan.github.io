import React from 'react';
import styled from '@emotion/styled';
import { faAndroid, faAws, faGithub, faJava, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faDatabase, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TextDefault from '../components/ui/TextDefault';
import { color } from '../utils/StyleTheme';

const Layout = styled.div(() => ({
  padding: '50px 0',
}));
const ContentLayout = styled.div(() => ({
  width: '100%',
  maxWidth: '840px',
  margin: '0 auto',
  '@media screen and (min-width: 481px) and (max-width: 1080px)': {
    minWidth: '600px',
    padding: `0 22px`,
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    minWidth: '0px',
    padding: `0 22px`,
  },
}));
const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProfileImg = styled.div`
  width: 220px;
  height: 220px;
  margin-right: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/assets/images/portpolio/profile_circle_img.png");
`;

const AboutLayout = () => {
    return (
        <main
          className="about"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Layout>
            <ContentLayout>
              <IntroWrapper>
                <div>
                  <div>
                    <TextDefault size="h1" weight="bold" >민  병  찬</TextDefault>
                  </div>
                  <div>
                    <TextDefault size="lg" weight="bold" color="orange">Front-End Developer</TextDefault>
                  </div>
                  <div>
                    <TextDefault size="lg">서울시 구로구 고척동</TextDefault>
                  </div>
                  <div>
                    <TextDefault size="lg">(+82) 010-7702-0481</TextDefault>
                  </div>
                  <div>
                    <TextDefault size="lg">mbc0481@naver.com</TextDefault>
                  </div>
                  <div>
                    <TextDefault size="lg">
                      <a href="https://minbyeongchan.github.io">
                        https://minbyeongchan.github.io
                      </a>
                    </TextDefault>
                  </div>
                  <div> 
                    <TextDefault size="lg">
                      <a href="https://github.com/MinByeongChan">
                        https://github.com/MinByeongChan
                      </a>
                    </TextDefault>
                  </div>
                  



                </div>
                <ProfileImg />
              </IntroWrapper>
            </ContentLayout>
          </Layout>
          
          {/* About me */}
          <AboutWrapper>
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
                <TextDefault size="h1" weight='bold' color="darkslategray" lineHeight="70px">
                  민 병 찬
                </TextDefault>
                <TextDefault size="xxg" weight='bold' color="darkslategray" lineHeight="70px">
                  부지런해지고 싶은 개발자
                </TextDefault>
                <TextDefault size="lg" color="darkslategray">
                  Front-end Developer in Seoul,
                </TextDefault>
                <ul>
                    <li style={{ margin: '5px 0 0 0' }}>
                        <TextDefault size="lg" color="darkslategray" >
                            o   안드로이드 앱부터 시작해서 현재는 웹을 개발하고 있는 2년차 개발자 입니다.
                        </TextDefault>
                    </li>
                    <li style={{ margin: '5px 0 0 0' }}>
                        <TextDefault size="lg" color="darkslategray" >
                            o   프론트엔드 개발은 바로 눈으로 볼 수 있어 직관적이라는 점에 빠져 개발하고 있습니다.
                        </TextDefault>
                    </li>
                    <li style={{ margin: '5px 0 0 0' }}>
                        <TextDefault size="lg" color="darkslategray">
                            o   사람들과 소통하고 프로젝트를 수행하는 것을 좋아합니다.
                        </TextDefault>
                    </li>
                </ul>
              </div>
            </IntroLayout>
          </AboutWrapper>
    
          {/* Programming Language Skill */}
          <AboutWrapper>
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
                    <TextDefault size="md" >
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
                    <TextDefault size="md" >
                      AWS EC2
                    </TextDefault>
                  </SkillLayout>
                  <SkillLayout>
                    <FontAwesomeIcon icon={faNodeJs} size="1x" />
                    <TextDefault size="md" >
                      Node.js / Express
                    </TextDefault>
                  </SkillLayout>
                  <SkillLayout>
                    <FontAwesomeIcon icon={faExchangeAlt} size="1x" />
                    <TextDefault size="md" >
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
                    <TextDefault size="md" >
                      Javascript(ES6) / Web (HTML5, CSS, SCSS)
                    </TextDefault>
                  </SkillLayout>
                  <SkillLayout>
                    <FontAwesomeIcon icon={faJava} size="1x" />
                    <TextDefault size="md" >
                      Java
                    </TextDefault>
                  </SkillLayout>
                  {/* <SkillLayout>
                    <img
                      alt="kotlin"
                      src={require('../assets/kotlin.png')}
                      style={{ width: '25px', margin: '0' }}
                    />
                    <TextDefault size="lg" >
                      Kotlin
                    </TextDefault>
                  </SkillLayout> */}
                  <SkillLayout>
                    <FontAwesomeIcon icon={faCopyright} size="1x" />
                    <TextDefault size="md">
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
                    <TextDefault size="md">
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
                    <TextDefault size="md" >
                      Android
                    </TextDefault>
                  </SkillLayout>
                  <SkillLayout>
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                    <TextDefault size="md">
                      Github
                    </TextDefault>
                  </SkillLayout>
                  <SkillLayout>
                    <TextDefault size="md">
                      SVN
                    </TextDefault>
                  </SkillLayout>
                </div>
              </SkillRow>
            </article>
          </AboutWrapper>  
        </main>
    );
};

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
  
  const SkillRow = styled.div((props) => ({
    width: '100%',
    margin: '0 0 10px 0',
    '@media  (min-width: 0px) and (max-width: 499px)': {
      margin: '0 0 5px 0',
    },
  }));
  
  const SkillLayout = styled.div((props) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: color.darkWhite,
    padding: '2px 10px',
    margin: '3px 3px 3px 0',
    borderRadius: '5px',
  }));

  const AboutWrapper = styled.section((props) => ({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    maxWidth: '1200px',
    height: 'calc(80vh)',
    padding: '50px 60px',
    borderRadius: '10px',
    backgroundColor: color.lightblue,
    margin: '30px auto',
    boxShadow: '0px 3px 10px 3px rgba(0,0,0,0.1)',
    '@media  (min-width: 0px) and (max-width: 768px)': {
      padding: '15px',
      margin: '15px',
      alignItems: 'center',
    },
  }));
export default AboutLayout;