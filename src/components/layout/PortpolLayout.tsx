// dependency
import React from 'react';
import styled from '@emotion/styled';

// components
import BlogCard from '@components/molecules/portpolio/BlogCard';
import KstaCard from '@components/molecules/portpolio/KstaCard';

const PortpolioLayout = () => {
  return (
    <PortpolContainer>
      <KstaCard />
      <BlogCard />
    </PortpolContainer>
  );
};

const PortpolContainer = styled.section`
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

export default PortpolioLayout;
