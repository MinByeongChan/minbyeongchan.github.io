import { atom } from 'jotai';

export interface IPostsAtom {
  title: string;
  description: string;
  date: string;
  modifiedDate: string;
  tags: string[];
  fileName: string;
}

export interface IPagePostsAtom {
  items: IPostsAtom[];
  currentPage: number;
  totalCount: number;
}

const initState = [];

export const postsAtom = atom<IPostsAtom[]>(initState);

export const filteredPostsAtom = atom<IPostsAtom[]>(initState);

export const pagePostAtom = atom<IPagePostsAtom[]>(initState);

if (process.env.NODE_ENV !== 'production') {
  postsAtom.debugLabel = 'postsAtom';
  filteredPostsAtom.debugLabel = 'filteredPostsAtom';
}
