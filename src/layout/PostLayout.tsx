import React from 'react';
import { format } from 'date-fns';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight } from '../utils/StyleTheme';
import { Content } from '../content/Content';
import { Config } from '../utils/Config';
import Utterances from '../components/comment/Utterances';
import TextDefault from '../components/ui/TextDefault';

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
};

const Layout = styled.div(() => ({
  padding: '50px 0',
}));

const TitleContainer = styled.div`
  margin-bottom: 12px;
  .title {
    font-size: ${fontSize.h2};
    font-weight: ${fontWeight.bold};
    color: ${color.darkBlack};
  }
  .date {
    font-size: ${fontSize.sm};
    font-weight: ${fontWeight.bold};
    color: ${color.gray};
  }
  @media screen and (min-width: 481px) and (max-width: 1080px) {
    align-items: flex-start;
    flex-direction: column;
    .title {
      font-size: ${fontSize.h2};
    }
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
    .title {
      font-size: ${fontSize.h3};
    }
  } ;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  .author-img {
    width: 30px;
    height: 30px;
    background-image: url('/assets/images/mbc_img.png');
    background-position: 50% 50%;
    background-size: cover;
    margin-right: 10px;
  }
  .author-name {
    color: ${color.darkBlack};
    font-size: ${fontSize.md};
    font-weight: ${fontWeight.bold};
  }
`;

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

const PostContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;

  @media screen and (min-width: 0px) and (max-width: 768px) {
    width: 100%;
    max-width: none;
  } ;
`;
const CommentTitleContainer = styled.div`
  margin: 50px 0 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid ${color.gray};
`;

const PostLayout = (props: IPostProps) => {
  return (
    <Layout>
      <ContentLayout>
        <TitleContainer>
          <div className="title">{props.title}</div>
          <div className="date" style={{ marginTop: 15 }}>
            {format(new Date(props.date), 'LLLL d, yyyy')}
          </div>
        </TitleContainer>
        <SubTitleContainer>
          <div className="author-img" />
          <span className="author-name">{Config.author}</span>
        </SubTitleContainer>

        <PostContainer>
          <Content>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: props.content }}
            />
          </Content>
        </PostContainer>

        {/* 댓글 컨테이너 - 시작 */}
        <CommentTitleContainer>
          <TextDefault size="xg" weight="bold">
            Comment
          </TextDefault>
        </CommentTitleContainer>
        {/* 댓글 컨테이너 - 시작 */}

        {/* Utterances - 시작 */}
        <Utterances repo="MinByeongChan/mbc-devBlog" theme="github-light" />
        {/* Utterances - 끝 */}
      </ContentLayout>
    </Layout>
  );
};

PostLayout.propTypes = {};

export default PostLayout;
