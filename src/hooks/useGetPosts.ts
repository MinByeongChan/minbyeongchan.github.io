// dependency
import React, { useEffect } from 'react';
import { IPostsAtom, postsAtom } from '@store/posts';
import { useAtom } from 'jotai';
import posts from '@assets/posts.json';

export default function useGetPosts() {
  const [, setPosts] = useAtom(postsAtom);

  useEffect(() => {
    const response: IPostsAtom[] = JSON.parse(String(posts));
    const sortedPosts = response.sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1,
    );
    setPosts(sortedPosts);
  }, []);
}
