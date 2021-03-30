import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight } from '../utils/StyleTheme';

export type IPaginationProps = {
  pagingList?: number[];
  previous?: string;
  next?: string;
  currPage?: string;
  maxPage?: string;
};

interface IPagingItem {
  curr?: boolean;
}

const PagingWrapper = styled.div`
  margin: 50px auto;
`;

const PagingList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PagingItem = styled.div(() => ({
  margin: '0 10px',
  '&:hover span': {
    opacity: '0.5',
    boxShadow: '0px 1px 0px',
  },
}));

const ItemText = styled.span`
  color: ${(props: IPagingItem) => (props.curr ? color.orange : color.darkBlack)};
  font-weight: ${(props: IPagingItem) => (props.curr ? fontWeight.bold : fontWeight.normal)};
  font-size: ${fontSize.lg};
  transition: 0.2s linear;
`;

const Pagination = (props: IPaginationProps) => {
  return (
    <PagingWrapper>
      <PagingList>
        {props.previous && (
          <PagingItem>
            <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
              <a>
                <ItemText>←</ItemText>
              </a>
            </Link>
          </PagingItem>
        )}

        {props.pagingList?.map((data, index) => {
          const page = data === 1 ? '/' : `page${data}`;
          const curr = data === Number(props.currPage) ? true : false;

          return (
            <PagingItem key={index}>
              <Link href={convertUrlToLinkHref(page)} as={page}>
                <a>
                  <ItemText curr={curr}>{data}</ItemText>
                </a>
              </Link>
            </PagingItem>
          );
        })}

        {props.next && (
          <PagingItem>
            <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
              <a>
                <ItemText>→</ItemText>
              </a>
            </Link>
          </PagingItem>
        )}
      </PagingList>
    </PagingWrapper>
  );
};

export { Pagination };
