/**
 * PostDetailContent
 * @description 블로그 포스트 상세페이지 컨텐츠
 */

// dependency
import React from 'react';
import styled from '@emotion/styled';
import { IPostsAtom } from '@store/posts';
import { fontSize, unitColor } from '@utils/StyleTheme';
import { Config } from '@utils/Config';

// components
import Text from '@components/atoms/Text';
import Utterances from '@components/molecules/comment/Utterances';
import { getDateFormat } from '@utils/Utility';

interface IPostDetailContent {
  post: IPostsAtom;
  htmlContent: string;
}

export default function PostDetailContent(props: IPostDetailContent) {
  const { post, htmlContent } = props;

  const getPostDate = (dateArg: string) => {
    const date = getDateFormat(dateArg);
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    return `${year}.${month}.${day}`;
  };

  return (
    <div>
      <TitleContainer>
        <div>
          <Text className="title" tagName="h3" weight="bold" color={unitColor.darkBlack}>
            {post.title}
          </Text>
        </div>
        <div style={{ marginTop: 15 }}>
          <Text size="sm" weight="bold" color={unitColor.gray}>
            {getPostDate(post.date)}
          </Text>
        </div>
      </TitleContainer>
      <SubTitleContainer>
        <a href={String(Config.url)}>
          <MBCIcon src="/assets/mbc_img.png" />
        </a>
        <Text className="author-name" size="md" color={unitColor.darkBlack} weight="bold">
          {String(Config.author)}
        </Text>
      </SubTitleContainer>

      <PostContainer>
        <div className="content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </PostContainer>

      <Utterances repo="MinByeongChan/minbyeongchan.github.io" theme="github-light" />
    </div>
  );
}

const TitleContainer = styled.div`
  margin-bottom: 12px;
  @media screen and (min-width: 481px) and (max-width: 1080px) {
    align-items: flex-start;
    flex-direction: column;
    .title {
      font-size: ${fontSize.h3};
    }
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
    .title {
      font-size: ${fontSize.xxg};
    }
  } ;
`;

const MBCIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
`;

const PostContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;

  @media screen and (min-width: 0px) and (max-width: 768px) {
    width: 100%;
    max-width: none;
  } ;
`;
