// dependency
import React, { useEffect } from 'react';
import { pagePostAtom, postsAtom } from '@store/posts';
import { useAtom } from 'jotai';

export default function useInitPage() {
  const [posts] = useAtom(postsAtom);
  const [, setPagePosts] = useAtom(pagePostAtom);

  const PAGE_PER_NUMBER = 9;
  const TOTAL_NUMBER = posts.length;

  useEffect(() => {
    let pagePost = [];

    const MAX = Number(Math.ceil(TOTAL_NUMBER / PAGE_PER_NUMBER));
    let start = 0;
    let end = PAGE_PER_NUMBER;
    for (let i = 0; i < MAX; i++) {
      let property = {
        items: posts.filter((post, id) => id >= start && id < end),
        currentPage: i,
        totalCount: TOTAL_NUMBER,
      };

      pagePost.push(property);
      start = start + PAGE_PER_NUMBER;
      end = end + PAGE_PER_NUMBER;
    }

    setPagePosts(pagePost);
  }, [posts]);
}
