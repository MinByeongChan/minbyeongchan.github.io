import React from 'react';
import { GetStaticProps } from 'next';

import { Main } from '../../templates/Main';
import { Meta } from '../../layout/Meta';
import TagLayout from '../../layout/TagLayout';
import { getAllPosts } from '../../utils/Content';

export type ITagProps = {
  tags: ITag[]
}

export interface ITag {
  name: string;
  cnt: number;
}

const Tags: React.FC<ITagProps> = (props: ITagProps) => {
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <TagLayout tags={props.tags}/>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<ITagProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'description', 'slug', 'tag']);

  const tags: ITag[]= [];

  posts.forEach((post) => {
    const tagArr: any[] = post.tag;

    tagArr.forEach((item) => {
      let idx = 0;
      // 기존 tags 배열에 tag가 있는지 검사
      const filtered = tags.find((data, index) => {
        idx = index;
        return data.name === item;
      });

      // tag가 없으면 새로운 태그 오브젝트 추가
      if(filtered === undefined) {
        tags.push({
          name: item,
          cnt: 1
        })
      } else {  // tag가 존재하면 기존 태그 오브젝트의 cnt 추가
        tags[idx].cnt++;
      }
    });
  });

  // 태그 배열 정렬
  tags.sort((a, b) => {
    return b.cnt - a.cnt;
  });

  return {
    props: {
      tags: tags
    },
  };
};

export default Tags;
