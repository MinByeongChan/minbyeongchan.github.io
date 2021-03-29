import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type IPaginationProps = {
  pagingList? : number[];
  previous?: string;
  next?: string;
  currPage?: string;
  maxPage?: string;
};

const Pagination = (props: IPaginationProps) => {
  const pagingList = props.pagingList;
  console.log("paginglist", pagingList);

  return (
    <div className="text-sm flex justify-between">
      {props.previous && (
        <div>
          <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
            <a>← Newer Posts</a>
          </Link>
        </div>
      )}

      {props.next && (
        <div className="text-right ml-auto">
          <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
            <a>Older Posts →</a>
          </Link>
        </div>
      )}
    </div>
)};

export { Pagination };
