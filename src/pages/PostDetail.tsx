// dependency
import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAtom } from 'jotai';
import { getMarkdown } from '@utils/Markdown';
import { IPostsAtom, postsAtom } from '@store/posts';

// components
import PostDetailContent from '@components/molecules/postDetail/PostDetailContent';
import useScrollTop from '@hooks/useScrollTop';

export default function PostDetail() {
  const params = useParams();
  const [posts] = useAtom(postsAtom);
  const [post, setPost] = useState<IPostsAtom>();
  const [htmlContent, setHtmlContent] = useState<string>('');

  const navigate = useNavigate();

  // 스크롤 상단 위치
  useScrollTop();

  const mdName = useMemo(() => `${params.id}.md`, [params]);

  const initPost = () => {
    const filteredPostContentIndex = posts.findIndex((instance) => instance.fileName === mdName);
    setPost(posts[filteredPostContentIndex]);
  };

  const barValidate = (array: string, index: number) => {
    return array[index] === '-' && array[index + 1] === '-' && array[index + 2] === '-';
  };

  const filterMetaData = (html: string) => {
    let start = false;
    let end = false;
    let pivot = 0;

    for (let i = 0; i < html.length; i++) {
      if (!start && barValidate(html, i)) {
        start = true;
        continue;
      }
      if (start && !end && barValidate(html, i)) {
        end = true;
        pivot = i + 2;
        break;
      }
    }

    return html.substring(pivot, html.length);
  };

  const getPostContent = async () => {
    const response = await axios.get(`/posts/${mdName}`, { responseType: 'text' });

    try {
      if (response.status !== 200) {
        navigate('/error');
        return;
      }

      const { data } = response;

      const filteredContent = filterMetaData(data);
      const mdText = getMarkdown(filteredContent).substring(21);
      setHtmlContent(mdText);
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    if (posts.length === 0) return;
    initPost();
    getPostContent();
  }, [posts]);

  return (
    <Layout>
      <ContentLayout>
        {post && htmlContent.length !== 0 && (
          <PostDetailContent post={post} htmlContent={htmlContent} />
        )}
      </ContentLayout>
    </Layout>
  );
}

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
