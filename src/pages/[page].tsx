import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import BlogGallery, { IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { getAllPosts } from '../utils/Content';
import { convertTo2D, createPageList } from '../utils/Pagination';

type IPageUrl = {
  page: string;
};

const PaginatePosts = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const posts = getAllPosts(['slug']);

  const pages = convertTo2D(posts, Config.pagination_size);

  return {
    paths: pages.slice(1).map((_, ind) => ({
      params: {
        // Ind starts from zero so we need to do ind + 1
        // slice(1) removes the first page so we do another ind + 1
        // the first page is implemented in index.tsx
        page: `page${ind + 2}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IBlogGalleryProps, IPageUrl> = async ({ params }) => {
  const posts = getAllPosts(['title', 'date', 'description', 'slug', 'tag']);

  const pages = convertTo2D(posts, Config.pagination_size);
  const currPage = Number(params!.page.replace('page', ''));
  const currentInd = currPage - 1;

  const pagination: IPaginationProps = {};

  const maxPage = pages.length;
  const pagingIndicator = Config.paging_indicator;
  
  const pagingList = createPageList(currPage, maxPage, pagingIndicator);

  // pagination 오브젝트 init
  pagination.pagingList = pagingList;
  pagination.maxPage = maxPage.toString();
  pagination.currPage = currPage.toString();

  if (currPage < pages.length) {
    pagination.next = `page${currPage + 1}`;
  }

  if (currPage === 2) {
    pagination.previous = '/';
  } else {
    pagination.previous = `page${currPage - 1}`;
  }

  return {
    props: {
      posts: pages[currentInd],
      pagination,
    },
  };
};

export default PaginatePosts;
