import styled from '@emotion/styled';
import React from 'react';
import BlogCard from '../components/about/BlogCard';
import KstaCard from '../components/about/KstaCard';

const AboutLayout = () => {

  return (
    <AboutContainer>
      <KstaCard />
      <BlogCard />
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 50px 20px;
  margin: 0 auto;
  @media screen and (min-width: 481px) and (max-width: 1080px) {
    max-width: 900px;
    padding: 22px 20px;
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    max-width: 480px;
    padding: 22px 20px;
  }
`;

export default AboutLayout;
