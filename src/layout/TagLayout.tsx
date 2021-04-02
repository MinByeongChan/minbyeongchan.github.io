import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { fontSize, fontWeight } from '../utils/StyleTheme';

const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 20px 0 20px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .search-img {
    width: 20px;
    height: 20px;
    margin-left: 15px;
  }
`;

const TopText = styled.div`
  font-size: ${fontSize.h1};
  font-weightL ${fontWeight.bold};
  margin-bottom: 25px;
`;

const TagItemList = styled.ul`
  margin-top: 20px;
`;

const TagLayout = () => {
  return (
    <Layout>
      <TopWrapper>
        <TopText>Tags</TopText>
      </TopWrapper>
      <div>블로그 태그를 모아둔 페이지입니다.</div>
      <TagItemList></TagItemList>
    </Layout>
  );
};

TagLayout.propTypes = {};

export default TagLayout;
