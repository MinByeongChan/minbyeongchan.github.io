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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [fadeSta, setFadeSta] = useState([false, false, false]);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (scrollPosition > 115 && !fadeSta[0]) {
      setFadeSta([true, false, false]);
    } else if (scrollPosition > 520 && !fadeSta[1]) {
      setFadeSta([true, true, false]);
    } else if (scrollPosition > 1180 && !fadeSta[2]) {
      setFadeSta([true, true, true]);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        padding: '45px',
        backgroundColor: color.lightGrey,
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
      <AboutLayout no={1} fadeSta={fadeSta}>
        <IntroLayout>
          <ImgLayout>
            <ImgWrapper>
              <img
                alt="profile"
                src={require('../assets/profile_circle_img.png')}
                style={{
                  position: 'absolute',
                  width: '150px',
                }}
              />
            </ImgWrapper>
          </ImgLayout>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: fontSize.xxg, fontWeight: fontWeight.bold }}>민 병 찬</div>
            <div style={{ fontSize: fontSize.lg, fontWeight: fontWeight.bold }}>
              부지런한 개발자
            </div>
            <div
              style={{
                fontSize: fontSize.lg,
                fontWeight: fontWeight.regular,
                color: color.darkslategray,
              }}
            >
              Front-end Developer in Seoul,
            </div>
            <div
              style={{
                fontSize: fontSize.regular,
                fontWeight: fontWeight.regular,
                color: color.darkslategray,
                margin: '10px 0 0 0',
              }}
            >
              안드로이드 앱부터 시작해서 현재는 웹을 개발하고 있는 2년차 개발자 입니다. 프론트엔드
              개발은 바로 눈으로 볼 수 있어 직관적이라는 점에 빠져 개발하고 있습니다. 사람들과
              소통하고 프로젝트를 수행하는 것을 좋아하며, 맡은바 최선을 다하는 개발자가 되려고
              노력하고 있습니다.
            </div>
          </div>
        </IntroLayout>
      </AboutLayout>

      {/* Programming Language Skill */}
      <AboutLayout no={2} fadeSta={fadeSta}>
        <div
          style={{
            fontSize: fontSize.xg,
            fontWeight: fontWeight.bold,
            margin: '0 0 15px 0',
          }}
        >
          Programming Language Skill
        </div>

        <SkillRow>
          <SkillRowLeft>Experienced</SkillRowLeft>
          <div
            style={{
              padding: '2px',
              borderRadius: '2px',
            }}
          >
            <SkillLayout>
              <span style={{ color: 'rgb(94,215,128)' }}>
                <FontAwesomeIcon icon={faReact} size="1x" />
              </span>
              <SkillContent>React / Gatsby / Redux / jQuery</SkillContent>
            </SkillLayout>
            <SkillLayout>
              <img
                alt="spring"
                src={require('../assets/spring_img.png')}
                style={{ width: '1rem', margin: '0' }}
              />
              <SkillContent>Spring MVC / Spring boot</SkillContent>
            </SkillLayout>
            <SkillLayout>
              <span style={{ color: 'rgb(48,215,128)' }}>
                <FontAwesomeIcon icon={faAndroid} size="1x" />
              </span>
              <SkillContent>Android</SkillContent>
            </SkillLayout>
            <SkillLayout>
              <FontAwesomeIcon icon={faAws} size="1x" />
              <SkillContent>AWS EC2</SkillContent>
            </SkillLayout>
            <SkillLayout>
              <FontAwesomeIcon icon={faExchangeAlt} size="1x" />
              <SkillContent>Rest API</SkillContent>
            </SkillLayout>
          </div>
        </SkillRow>

        <SkillRow>
          <SkillRowLeft>Language</SkillRowLeft>
          <div
            style={{
              padding: '2px',
              borderRadius: '2px',
            }}
          >
            <SkillLayout>
              <FontAwesomeIcon icon={faJs} size="1x" />
              <SkillContent>Javascript (ES6) / Web (HTML5, CSS, SCSS)</SkillContent>
            </SkillLayout>
            <SkillLayout>
              <FontAwesomeIcon icon={faJava} size="1x" />
              <SkillContent>Java</SkillContent>
            </SkillLayout>
            <SkillLayout>
              <img
                alt="kotlin"
                src={require('../assets/kotlin.png')}
                style={{ width: '25px', margin: '0' }}
              />
              <SkillContent>Kotlin</SkillContent>
            </SkillLayout>
            <SkillLayout>
              <FontAwesomeIcon icon={faCopyright} size="1x" />
              <SkillContent>C/C++</SkillContent>
            </SkillLayout>
          </div>
        </SkillRow>

        <SkillRow>
          <SkillRowLeft>Database</SkillRowLeft>
          <div
            style={{
              padding: '2px',
              borderRadius: '2px',
            }}
          >
            <SkillLayout>
              <FontAwesomeIcon icon={faDatabase} size="1x" />
              <SkillContent>Mysql / Mssql</SkillContent>
            </SkillLayout>
          </div>
        </SkillRow>

        <SkillRow>
          <SkillRowLeft>
            SCM
            <span style={{ fontSize: fontSize.md, fontWeight: fontWeight.regular }}>
              (형상관리)
            </span>
          </SkillRowLeft>
          <div
            style={{
              padding: '2px',
              borderRadius: '2px',
            }}
          >
            <SkillLayout>
              <FontAwesomeIcon icon={faGithub} size="1x" />
              <SkillContent>Github</SkillContent>
            </SkillLayout>
            <SkillLayout>
              <SkillContent>SVN</SkillContent>
            </SkillLayout>
          </div>
        </SkillRow>
      </AboutLayout>

      {/* KSTA */}
      <AboutLayout no={3} fadeSta={fadeSta}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: color.white,
          }}
        >
          <div style={{ width: '350px' }}>
            <div style={{ margin: '0 0 10px 0' }}>
              <span style={{ fontSize: fontSize.xxg, fontWeight: fontWeight.bold }}>KSTA</span>
              <span
                style={{
                  fontSize: fontSize.md,
                  fontWeight: fontWeight.regular,
                  margin: '0 0 0 10px',
                }}
              >
                (Webview Android App)
              </span>
            </div>
            <div
              style={{ fontSize: fontSize.lg, fontWeight: fontWeight.bold, margin: '0 0 15px 0' }}
            >
              KSNET 가맹점 매출내역 및 전표 조회 App
            </div>

            <div
              style={{ fontSize: fontSize.md, fontWeight: fontWeight.bold, margin: '0 0 10px 0' }}
            >
              <span style={{ margin: '0 8px 0 0' }}>
                <FontAwesomeIcon icon={faClipboard} size="1x" />
              </span>
              <span>개발 내용</span>
            </div>

            <div
              style={{ fontSize: fontSize.md, fontWeight: fontWeight.bold, margin: '0 0 10px 0' }}
            >
              <span>
                앱 페이지와 back-end API와 연동하여 매출을 확인할 수 있도록 개발했습니다. 또한,
                사용자에게 편의성을 제공하기위해 직관적인 UI/UX를 사용하여 개발을 완료했습니다.
              </span>
            </div>

            <ul
              style={{
                margin: '0 0 0 5px',
                padding: '0',
                listStyle: 'none',
                fontSize: fontSize.md,
                fontWeight: fontWeight.regular,
              }}
            >
              <li style={{ padding: '0', margin: '3px 0' }}>
                <span style={{ margin: '0 8px 0 0' }}>
                  <FontAwesomeIcon icon={faCheck} size="1x" />
                </span>
                Front-End 영역 개발 담당
              </li>
              <li style={{ padding: '0', margin: '3px 0' }}>
                <span style={{ margin: '0 8px 0 0' }}>
                  <FontAwesomeIcon icon={faCheck} size="1x" />
                </span>
                Back-End와 매출 내역 API 연동 개발
              </li>
              <li style={{ padding: '0', margin: '3px 0' }}>
                <span style={{ margin: '0 8px 0 0' }}>
                  <FontAwesomeIcon icon={faCheck} size="1x" />
                </span>
                UI/UX 개발
              </li>
            </ul>
            <div></div>
          </div>
          <img
            alt="profile"
            src={require('../assets/ksta.png')}
            style={{ width: '320px', margin: '15px' }}
          />
        </div>
      </AboutLayout>

      {/* MY BLOG */}
      <AboutLayout no={4} fadeSta={fadeSta}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: color.white,
          }}
        >
          <div style={{ width: '350px' }}>
            <div style={{ margin: '0 0 10px 0' }}>
              <span style={{ fontSize: fontSize.xxg, fontWeight: fontWeight.bold }}>
                개인 블로그
              </span>
              <span
                style={{
                  fontSize: fontSize.md,
                  fontWeight: fontWeight.regular,
                  margin: '0 0 0 10px',
                }}
              >
                (using Gatsby, React.js)
              </span>
            </div>
            <div
              style={{ fontSize: fontSize.lg, fontWeight: fontWeight.bold, margin: '0 0 15px 0' }}
            >
              React.js와 Gatsby를 사용하여 개발한 블로그.
            </div>

            <div
              style={{ fontSize: fontSize.md, fontWeight: fontWeight.bold, margin: '0 0 10px 0' }}
            >
              <span style={{ margin: '0 8px 0 0' }}>
                <FontAwesomeIcon icon={faClipboard} size="1x" />
              </span>
              <span>개발 내용</span>
            </div>

            <div
              style={{ fontSize: fontSize.md, fontWeight: fontWeight.bold, margin: '0 0 10px 0' }}
            >
              <span>
                개인 공부 및 개발했던 것들을 기록하고 공유하기 위해 개발한 블로그입니다. React.js를
                사용하여 웹페이지의 기본적인 틀을 구성하였습니다.
              </span>
            </div>

            <ul
              style={{
                margin: '0 0 0 5px',
                padding: '0',
                listStyle: 'none',
                fontSize: fontSize.md,
                fontWeight: fontWeight.regular,
              }}
            >
              <li style={{ padding: '0', margin: '3px 0' }}>
                <span style={{ margin: '0 8px 0 0' }}>
                  <FontAwesomeIcon icon={faCheck} size="1x" />
                </span>
                Front-End 영역 개발 담당
              </li>
              <li style={{ padding: '0', margin: '3px 0' }}>
                <span style={{ margin: '0 8px 0 0' }}>
                  <FontAwesomeIcon icon={faCheck} size="1x" />
                </span>
                반응형 웹 페이지 및 UI/UX 개발
              </li>
            </ul>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: fontSize.md,
                fontWeight: fontWeight.bold,
                margin: '50px 0 0 0',
              }}
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
              <a
                href="https://github.com/MinByeongChan/minbyeongchan.github.io"
                style={{ boxShadow: '0', color: color.white, margin: '0 0 0 15px' }}
              >
                블로그 소스
              </a>
            </div>
          </div>
          <iframe
            alt="profile"
            src="https://minbyeongchan.github.io/"
            style={{
              width: '380px',
              height: '600px',
              margin: '15px',
              border: `8px solid ${color.lightGrey}`,
            }}
          />
        </div>
      </AboutLayout>
    </section>
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

const IntroLayout = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '20px 0',
  '@media  (min-width: 0px) and (max-width: 768px)': {
    flexDirection: 'column',
  },
}));
const ImgLayout = styled.div(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '0 40px 0 0',
  '@media  (min-width: 0px) and (max-width: 768px)': {
    justifyContent: 'center',
    margin: '0',
  },
}));

const ImgWrapper = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  width: '150px',
  height: '150px',
  margin: '0 0 20px 0',
  borderRadius: '50%',
  backgroundColor: color.lightGrey,
  boxShadow: `0px 2px 4px 3px rgb(0 0 0 / 10%)`,
  '@media  (min-width: 0px) and (max-width: 768px)': {},
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
  display: 'flex',
  margin: '0 0 10px 0',
}));

const SkillRowLeft = styled.div((props) => ({
  width: '140px',
  minWidth: '140px',
  fontSize: fontSize.lg,
  fontWeight: fontWeight.regular,
  padding: '3px 20px 0 0',
}));

const SkillLayout = styled.div((props) => ({
  float: 'left',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: color.white,
  padding: '2px 10px',
  margin: '3px 3px',
  borderRadius: '5px',
}));

const SkillContent = styled.div((props) => ({
  fontSize: fontSize.md,
  fontWeight: fontWeight.regular,
  margin: '4px 10px',
}));

export default About;
