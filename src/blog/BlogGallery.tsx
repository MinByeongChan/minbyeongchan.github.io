import React from 'react';

import styled from '@emotion/styled';
import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';
import { fontSize, fontWeight } from '../utils/StyleTheme';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const Layout = styled.div`
  padding: 80px 40px;
`;

const TopText = styled.span`
  font-size: ${fontSize.h1};
  font-weightL ${fontWeight.bold};
`;

const BlogGallery: React.FC<IBlogGalleryProps> = (props: IBlogGalleryProps) => (
  <Layout>
    <TopText>
      Post
    </TopText>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a>
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <div>{format(new Date(elt.date), 'LLL d, yyyy')}</div>
        </li>
      ))}
    </ul>

    <Pagination 
      pagingList={props.pagination.pagingList}
      previous={props.pagination.previous} 
      next={props.pagination.next} />
  </Layout>
);

export { BlogGallery };
