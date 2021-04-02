import React from 'react';
import { GetStaticProps } from 'next';

import { Main } from '../../templates/Main';
import { Meta } from '../../layout/Meta';
import TagLayout from '../../layout/TagLayout';
import { getAllPosts } from '../../utils/Content';
import { IPaginationProps } from '../../pagination/Pagination';
import { convertTo2D, createPageList } from '../../utils/Pagination';
import { Config } from '../../utils/Config';
import { IBlogGalleryProps } from '../../blog/BlogGallery';

const Tags = () => {
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <TagLayout />
    </Main>
  );
};

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'description', 'slug', 'tag']);
  const pagination: IPaginationProps = {};
  const tagType = {
    name: '',
    num: '',
  };

  // const tags = [];
  // posts.forEach((post) => {
  //   tags.find((data) => {
  //     return
  //   })
  //   return {};
  // });

  // console.log('tags', tags);

  const pages = convertTo2D(posts, Config.pagination_size);

  const maxPage = pages.length;
  const pagingIndicator = Config.paging_indicator;

  return {
    props: {
      posts: posts.slice(0, Config.pagination_size),
      pagination,
    },
  };
};

export default Tags;
