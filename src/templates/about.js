import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { fontSize, color, fontWeight } from '../styles/theme';
import AboutLayout from '../components/about/AboutLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopyright,
  faCheck,
  faClipboard,
  faDatabase,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faJs,
  faJava,
  faReact,
  faAndroid,
  faAws,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [fadeSta, setFadeSta] = useState([false, false, false]);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  // window.addEventListener('scroll', handleScroll, { passive: true });

  // if (scrollPosition > 115 && !fadeSta[0]) {
  //   setFadeSta([true, false, false]);
  // } else if (scrollPosition > 520 && !fadeSta[1]) {
  //   setFadeSta([true, true, false]);
  // } else if (scrollPosition > 1180 && !fadeSta[2]) {
  //   setFadeSta([true, true, true]);
  // }

  // return () => {
  //   window.removeEventListener('scroll', handleScroll);
  // };
  // }, [scrollPosition]);

  return (
    <main
      className="about"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: color.lightWhite,
      }}
    >
      <TopLayout>
        <div>
          <Link to="/">
            <span style={{ color: color.black, margin: '0 15px' }}>Blog</span>
          </Link>
          <Link to="/about">
            <span style={{ color: color.black, margin: '0 15px' }}>Portfolio</span>
          </Link>
        </div>
      </TopLayout>

      {/* About me */}
      <AboutLayout no={1}>
        <IntroLayout>
          <ImgLayout>
            <ImgWrapper>
              <img
                alt="profile"
                src={require('../assets/profile_circle_img.png')}
                style={{
                  position: 'absolute',
                  width: '200px',
                  '@media  (min-width: 0px) and (max-width: 768px)': {
                    width: '150px',
                  },
                }}
              />
            </ImgWrapper>
          </ImgLayout>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <TextDefault size="h1" bold color="darkslategray">
              민 병 찬
            </TextDefault>
            <TextDefault size="xxg" bold color="darkslategray">
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
            <TextDefault size="xxg" bold>
              기술 스택
            </TextDefault>
          </div>
          <SkillRow>
            <div style={{ margin: '0 0 10px 0' }}>
              <TextDefault size="lg">Experienced</TextDefault>
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
                  React / Gatsby / Redux / jQuery
                </TextDefault>
              </SkillLayout>
              <SkillLayout>
                <span style={{ color: 'rgb(48,215,128)' }}>
                  <FontAwesomeIcon icon={faAndroid} size="1x" />
                </span>
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  Android
                </TextDefault>
              </SkillLayout>
              <SkillLayout>
                <FontAwesomeIcon icon={faAws} size="1x" />
                <TextDefault size="md" style={{ margin: '0 10px' }}>
                  AWS EC2
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

      {/* KSTA */}
      <AboutLayout no={3}>
        <ProjWrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '400px',
              zIndex: '2',
              backgroundColor: color.dodgerblue,
            }}
          >
            <TextDefault size="h1" bold color="white">
              KSTA
            </TextDefault>
            <div style={{ margin: '0 0 30px 0' }}>
              <TextDefault size="xg" color="white">
                (Webview Android App)
              </TextDefault>
            </div>

            <div>
              <TextDefault size="lg" bold color="white" style={{ margin: '0 0 15px 0' }}>
                KSNET 가맹점 매출내역 및 전표 조회 App
              </TextDefault>

              {/* <div style={{ margin: '0 0 10px 0' }}>
              <span style={{ margin: '0 8px 0 0' }}>
                <FontAwesomeIcon icon={faClipboard} size="1x" />
              </span>
              <TextDefault size="md" bold>
                개발 내용
              </TextDefault>
            </div> */}

              <div style={{ margin: '15px 0 0 0' }}>
                <TextDefault size="md" bold color="white" style={{ margin: '0 0 10px 0' }}>
                  앱 페이지와 back-end API와 연동하여 매출 관리 개발을 담당했습니다.
                  <br /> 사용자에게 편의성을 제공하기위해 직관적인 UI/UX를 사용하여 개발을
                  완료했습니다.
                </TextDefault>
              </div>

              <ul
                style={{
                  margin: '15px 0 0 5px',
                  listStyle: 'none',
                }}
              >
                <li style={{ margin: '3px 0' }}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="1x"
                    style={{ margin: '0 8px 0 0', color: color.white }}
                  />
                  <TextDefault size="md" color="white">
                    Front-End 영역 개발 담당
                  </TextDefault>
                </li>
                <li style={{ margin: '3px 0' }}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="1x"
                    style={{ margin: '0 8px 0 0', color: color.white }}
                  />
                  <TextDefault size="md" color="white">
                    Back-End 매출 내역 API 연동 개발
                  </TextDefault>
                </li>
                <li style={{ margin: '3px 0' }}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="1x"
                    style={{ margin: '0 8px 0 0', color: color.white }}
                  />
                  <TextDefault size="md" color="white">
                    UI/UX 개발
                  </TextDefault>
                </li>
              </ul>
            </div>
          </div>
          <ImgLayout2>
            <img
              alt="profile"
              style={{ margin: '0', padding: '0' }}
              src={require('../assets/ksta.png')}
            />
          </ImgLayout2>
        </ProjWrapper>
      </AboutLayout>

      {/* MY BLOG */}
      <AboutLayout no={4}>
        <ProjWrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '400px',
              zIndex: '2',
            }}
          >
            <TextDefault size="h1" bold color="white">
              개인 블로그
            </TextDefault>
            <div style={{ margin: '0 0 30px 0' }}>
              <TextDefault size="xg" color="white">
                (using Gatsby, React.js)
              </TextDefault>
            </div>

            <div>
              <TextDefault size="lg" bold color="white" style={{ margin: '0 0 15px 0' }}>
                React.js, Gatsby를 이용한 기술 블로그
              </TextDefault>

              <div style={{ margin: '15px 0 0 0' }}>
                <TextDefault size="md" bold color="white" style={{ margin: '0 0 10px 0' }}>
                  개인 공부 및 개발했던 것들을 기록하고 공유하기 위해 개발한 블로그입니다.
                  <br />
                  React.js를 사용하여 웹페이지의 기본적인 틀을 구성하였습니다.
                </TextDefault>
              </div>

              <ul
                style={{
                  margin: '15px 0 0 5px',
                  listStyle: 'none',
                }}
              >
                <li style={{ margin: '3px 0' }}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="1x"
                    style={{ margin: '0 8px 0 0', color: color.white }}
                  />
                  <TextDefault size="md" color="white">
                    Front-End 개발
                  </TextDefault>
                </li>
                <li style={{ margin: '3px 0' }}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="1x"
                    style={{ margin: '0 8px 0 0', color: color.white }}
                  />
                  <TextDefault size="md" color="white">
                    반응형 웹 페이지 및 UI/UX 개발
                  </TextDefault>
                </li>
              </ul>
            </div>

            <a href="https://github.com/MinByeongChan/minbyeongchan.github.io/tree/blog">
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                style={{ margin: '0 8px 0 0', color: color.white }}
              />

              <TextDefault size="md" color="white">
                Repository 이동
              </TextDefault>
            </a>
          </div>
          <IframeLayout alt="profile" src="https://minbyeongchan.github.io/" />
        </ProjWrapper>
      </AboutLayout>
    </main>
  );
};

const TopLayout = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  alignItems: 'center',
  fontSize: fontSize.xxg,
  fontWeight: fontWeight.bold,
}));

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
  backgroundColor: color.lightGrey,
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
  fontWeight: fontWeight.regular,
  padding: '3px 20px 0 0',
}));

const SkillLayout = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: color.lightWhite,
  padding: '2px 10px',
  margin: '3px 3px 3px 0',
  borderRadius: '5px',
}));

const SkillContent = styled.div((props) => ({
  fontSize: fontSize.md,
  fontWeight: fontWeight.regular,
  margin: '4px 10px',
}));

const TextDefault = styled.span((props) => ({
  fontSize:
    (props.size === 'h1' && fontSize.h1) ||
    (props.size === 'xxg' && fontSize.xxg) ||
    (props.size === 'xg' && fontSize.xg) ||
    (props.size === 'lg' && fontSize.lg) ||
    (props.size === 'md' && fontSize.md),
  fontWeight: props.bold ? fontWeight.bold : fontWeight.regular,
  color: props.color ? color[`${props.color}`] : '',
  '@media  (min-width: 500px) and (max-width: 820px)': {
    fontSize:
      (props.size === 'h1' && fontSize.xxg) ||
      (props.size === 'xxg' && fontSize.xg) ||
      (props.size === 'xg' && fontSize.lg) ||
      (props.size === 'lg' && fontSize.lg) ||
      (props.size === 'md' && fontSize.md),
  },
  '@media  (min-width: 0px) and (max-width: 499px)': {
    fontSize:
      (props.size === 'h1' && fontSize.xxg) ||
      (props.size === 'xxg' && fontSize.xg) ||
      (props.size === 'xg' && fontSize.lg) ||
      (props.size === 'lg' && fontSize.md) ||
      (props.size === 'md' && fontSize.sm),
  },
}));

export default About;
