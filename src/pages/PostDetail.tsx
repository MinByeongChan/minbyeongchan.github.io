// dependency
import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAtom } from 'jotai';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { getApp } from 'firebase/app';
import { getMarkdown } from '@utils/Markdown';
import { IPostsAtom, postsAtom } from '@store/posts';
import useScrollTop from '@hooks/useScrollTop';
import { getQueryString } from '@utils/Utility';

// components
import PostDetailContent from '@components/molecules/postDetail/PostDetailContent';
import Loading from '@components/molecules/Loading';

// interfaces
type IPostDetailQueryString = {
  id?: string;
};

export default function PostDetail() {
  // const params = useParams();
  const { search } = useLocation();
  const queryString: IPostDetailQueryString = getQueryString(location.search);
  const [posts] = useAtom(postsAtom);
  const [post, setPost] = useState<IPostsAtom | undefined>();
  const [htmlContent, setHtmlContent] = useState<string>('');

  const navigate = useNavigate();

  if (!queryString?.id) {
    navigate('/error', { replace: true });
  }
  // 스크롤 상단 위치
  useScrollTop();

  const mdName = useMemo(() => decodeURIComponent(`${queryString?.id}`), [queryString]);

  const initPost = () => {
    const filteredPostContentIndex = posts.findIndex(
      ({ fileName }) => fileName.replace('.md', '') === mdName,
    );
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
        pivot = i + 3;
        break;
      }
    }

    return html.substring(pivot, html.length);
  };

  const getPostContent = async () => {
    const storage = getStorage(getApp());
    const pathReference = ref(storage, `posts/${mdName}.md`);

    const url = await getDownloadURL(pathReference);

    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        const { data } = response;

        const filteredContent = filterMetaData(data);
        const mdText = getMarkdown(filteredContent);
        setHtmlContent(mdText);
      } else {
        navigate('/error', { replace: true });
        throw new Error('Network error');
      }
    } catch (error) {
      navigate('/error', { replace: true });
      console.error(error);
    }
  };

  useEffect(() => {
    if (posts.length === 0) return;
    getPostContent();
    initPost();
  }, [posts]);

  return (
    <>
      {htmlContent.length === 0 && <Loading />}

      <Layout>
        <ContentLayout>
          {post && htmlContent.length !== 0 && (
            <PostDetailContent post={post} htmlContent={htmlContent} />
          )}
        </ContentLayout>
      </Layout>
    </>
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
