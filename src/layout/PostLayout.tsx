import React from 'react';
import { format } from 'date-fns';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight } from '../utils/StyleTheme';
import { Content } from '../content/Content';
import { Config } from '../utils/Config';

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
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
  .title {
    font-size: ${fontSize.h2};
    font-weight: ${fontWeight.bold};
    color: ${color.darkBlack};
  }
  .date {
    font-size: ${fontSize.md};
    font-weight: ${fontWeight.bold};
    color: ${color.gray};
    margin-left: 10px;
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
  .author-img {
    width: 42px;
    height: 42px;
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
  width: '70%',
  minWidth: '780px',
  margin: '0 auto',
  '@media screen and (min-width: 481px) and (max-width: 1080px)': {
    width: '100%',
    minWidth: '600px',
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    width: '100%',
    minWidth: '0px',
  },
}));

const PostLayout = (props: IPostProps) => {
  return (
    <Layout>
      <ContentLayout>
        <TitleContainer>
          <span className="title">{props.title}</span>
          <span className="date">{format(new Date(props.date), 'LLLL d, yyyy')}</span>
        </TitleContainer>
        <SubTitleContainer style={{ display: 'flex', alignItems: 'center' }}>
          <div className="author-img" />
          <span className="author-name">{Config.author}</span>
        </SubTitleContainer>
      </ContentLayout>

      <ContentLayout>
        <Content>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </Content>
      </ContentLayout>
    </Layout>
  );
};

PostLayout.propTypes = {};

export default PostLayout;
