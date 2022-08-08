// dependency
import React from 'react';
import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';

// interfaces
import { IPostsAtom } from '@store/posts';

// components
import PostCard from '@components/molecules/posts/PostCard';

export type IGalleryWrapperProps = {
  posts: IPostsAtom[];
};

export default function PostContents(props: IGalleryWrapperProps) {
  const { posts } = props;
  return (
    <ContentsContainer>
      {posts.length !== 0 && posts.map((post) => <PostCard key={uuid()} post={post} />)}
    </ContentsContainer>
  );
}

const ContentsContainer = styled.div(() => ({
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '30px',
  padding: '0 20px',
  marginBottom: '100px',
  '@media screen and (min-width: 481px) and (max-width: 1080px)': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    gridTemplateColumns: '1fr',
  },
}));
