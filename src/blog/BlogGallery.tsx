import React from 'react';

import styled from '@emotion/styled';
import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';
import { color, fontSize, fontWeight } from '../utils/StyleTheme';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const Layout = styled.div`
  padding: 42px 60px 0 60px;
`;

const TopText = styled.div`
  font-size: ${fontSize.h1};
  font-weightL ${fontWeight.bold};
  margin-bottom: 60px;
`;

const GalleryWrapper = styled.div(() => ({
  display: 'grid',
  width: '100%',
  justifyContent: 'center',
  gridTemplateColumns: 'auto auto auto',
  gridGap: '10px',
  '@media screen and (min-width: 481px) and (max-width: 1080px)': {
    gridTemplateColumns: 'auto auto',
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    gridTemplateColumns: 'auto',
  },
}));

const GalleryItem = styled.div(() => ({
  width: '100%',
  // border: `1px solid ${color.darkBlack}`,
  color: `${color.darkBlack}`,
  padding: '25px 12px',
  '.gallery-item-title': {
    fontSize: `${fontSize.xxg}`,
  },
  '.gallery-item-desc': {
    fontSize: `${fontSize.md}`,
  },
  '.gallery-item-bottom': {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: `${fontSize.sm}`,
    padding: '10px 10px 0px 0px',
  },
}));

const BlogGallery: React.FC<IBlogGalleryProps> = (props: IBlogGalleryProps) => (
  <Layout>
    <TopText>Post</TopText>
    <GalleryWrapper>
      {props.posts.map((elt) => (
        <GalleryItem>
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a>
              <div style={{ padding: '15px 15px 20px 15px' }}>
                <h2 className="gallery-item-title">{elt.title}</h2>
                <div className="gallery-item-desc">{elt.description}</div>
                <div className="gallery-item-bottom">
                  <span>{format(new Date(elt.date), 'LLL d, yyyy')}</span>
                  <span className="gallery-item-readmore">read more</span>
                </div>
              </div>
            </a>
          </Link>
        </GalleryItem>
      ))}
    </GalleryWrapper>

    <Pagination
      pagingList={props.pagination.pagingList}
      previous={props.pagination.previous}
      currPage={props.pagination.currPage}
      next={props.pagination.next}
    />
  </Layout>
);

export { BlogGallery };
