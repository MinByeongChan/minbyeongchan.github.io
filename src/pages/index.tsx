import React from 'react';

import { GetStaticProps } from 'next';

import BlogGallery, { IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { getAllPosts } from '../utils/Content';
import { convertTo2D, createPageList } from '../utils/Pagination';

const Index: React.FC<IBlogGalleryProps> = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="WELCOME MY BLOG" description={Config.description} />}>
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'description', 'slug', 'tags']);
  const pagination: IPaginationProps = {};

  const pages = convertTo2D(posts, Config.pagination_size);

  const maxPage = pages.length;
  const pagingIndicator = Config.paging_indicator;

  const pagingList = createPageList(1, maxPage, pagingIndicator);

  // pagination 오브젝트 init
  pagination.pagingList = pagingList;
  pagination.maxPage = maxPage.toString();
  pagination.currPage = '1';
  if (posts.length > Config.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, Config.pagination_size),
      pagination,
    },
  };
};

export default Index;
