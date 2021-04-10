import styled from '@emotion/styled';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { color } from '../../utils/StyleTheme';
import TextDefault from '../ui/TextDefault';

const BlogCard = () => {
    return (
        <CardContainer>
          <CardItem>
            <CardItemContent>
                <TextDefault size="h1" weight='bold' color="white">
                 개인 블로그
                </TextDefault>
                <div style={{ margin: '0 0 30px 0' }}>
                  <TextDefault size="xg" color="white">
                    (using Next.js, React.js)
                  </TextDefault>
                </div>
  
                  <TextDefault size="lg" weight='bold' color="white" style={{ margin: '0 0 15px 0' }}>
                    React.js, Next.js을 사용한 기술 블로그
                  </TextDefault>
  
                  <div style={{ margin: '15px 0 0 0' }}>
                    <TextDefault size="md" weight='bold' color="white" style={{ margin: '0 0 10px 0' }}>
                      개인 공부 및 개발했던 것들을 기록하고 공유하기 위해 개발한 블로그입니다.
                      <br />
                      React.js를 사용하여 웹페이지의 기본적인 틀을 구성하였습니다.
                    </TextDefault>
                  </div>
  
                  <DescItems>
                    <DescItem >
                    <IconWrapper>
                        <FontAwesomeIcon icon={faCheck} />
                      </IconWrapper>
                      <TextDefault size="md" color="white">
                        Front-End 개발
                      </TextDefault>
                    </DescItem>
                    <DescItem>
                      <IconWrapper>
                        <FontAwesomeIcon icon={faCheck} />
                      </IconWrapper>
                      <TextDefault size="md" color="white">
                        반응형 웹 페이지 및 UI/UX 개발
                      </TextDefault>
                    </DescItem>
                  </DescItems>
            </CardItemContent>
          </CardItem>
        </CardContainer>
    );
};

const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 505px;
  background-color: #8e8e8e;
  margin: 20px auto;
  border-radius: 12px;
  padding: 20px 40px;
  overflow: hidden;

  @media screen and (min-width: 0px) and (max-width: 768px) {
    min-height: 650px;
    padding: 40px 20px;
  }
`;
const CardItem = styled.div`
  width: 100%;
  min-height: 460px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(12,1fr);
  
  background-size: contain;
  background-position: 5% 100%;
  align-content: center;
  background-repeat: no-repeat;
  background-image: url("/assets/about/myblog.png");
  
  @media screen and (min-width: 0px) and (max-width: 768px) {
    min-height: 550px;

    background-size: 87%;
    background-position: top;
    align-content: flex-end;
    background-image: url("/assets/about/myblog.png");
  }
`;
const CardItemContent = styled.div`
  grid-column: 7/13;
  align-self: center;
  
  @media screen and (min-width: 0px) and (max-width: 768px) {
    grid-column: 1/-1;
    
    background-size: 80vw;
    background-position: top;
    background-repeat: no-repeat;
    align-content: flex-end;
    background-image: url("/assets/about/ksta.png");
    background : linear-gradient(
      180deg
      ,rgba(40,35,135,0),#8e8e8e 12%,#8e8e8e);
  }
`;
const DescItems = styled.ul`
  margin: 15px 0 0 5px;
`;
const DescItem = styled.li`
  display: flex;
  align-items: center;
  margin: 3px 0;
`;
const IconWrapper = styled.div`
  margin: 0 8px 0 0;
  color: ${color.white};
  width: 16px;
  height: 16px;
`;

export default BlogCard;