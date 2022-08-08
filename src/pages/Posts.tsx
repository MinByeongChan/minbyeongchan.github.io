// dependency
import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { filteredPostsAtom, pagePostAtom, postsAtom } from '@store/posts';

// components
import Text from '@components/atoms/Text';
import Search from '@components/molecules/posts/Search';
import PostContents from '@components/molecules/posts/PostContents';

interface IQueryString {
  search?: string;
}

export default function Posts() {
  const location = useLocation();
  const [posts] = useAtom(postsAtom);
  const [pagePost] = useAtom(pagePostAtom);
  const [filteredPosts] = useAtom(filteredPostsAtom);

  const [searchInput, setSearchInput] = useState<string>('');

  const getQueryString = (search: string) => {
    const queryString = search.substring(1);
    let queryInstance: IQueryString = {};

    queryString.split('&').forEach((query) => {
      const key = query.split('=')[0];
      const value = query.split('=')[1];
      queryInstance[key] = decodeURIComponent(value);
    });

    return queryInstance;
  };

  const title = useMemo(() => (searchInput.length === 0 ? 'Post' : 'Search Result'), [searchInput]);
  const contentsData = useMemo(
    () => (searchInput.length === 0 ? posts : filteredPosts),
    [searchInput, posts, filteredPosts],
  );

  // 쿼리스트링 처리
  useEffect(() => {
    const queryInstance = getQueryString(location.search);
    if (queryInstance?.search) {
      setSearchInput(queryInstance?.search);
    }
  }, [location]);

  return (
    <Layout>
      <TopWrapper>
        <Text tagName="h2">{title}</Text>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </TopWrapper>

      <PostContents posts={contentsData} />
    </Layout>
  );
}

const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 20px 0 20px;
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 80px;
  @media screen and (min-width: 0px) and (max-width: 481px) {
    & h2 {
      margin-bottom: 10px;
    }
    align-items: center;
    flex-direction: column;
  } ;
`;
