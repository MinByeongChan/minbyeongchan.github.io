import React from 'react';
import { Link } from 'react-router-dom';

import { convertUrlToLinkHref } from '@utils/Pagination';
import styled from '@emotion/styled';
import { unitColor, fontSize, fontWeight } from '@utils/StyleTheme';

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
  align-items: center;
  width: 100%;
`;

const PagingItem = styled.div(() => ({
  margin: '0 10px',
  '&:hover span, &:hover .paging-item-icon': {
    opacity: '0.5',
    boxShadow: '0px 1px 0px',
  },
  '.paging-item-icon': {
    width: '14px',
    height: '14px',
    transition: '0.2s linear',
  },
}));

const ItemText = styled.span`
  color: ${(props: IPagingItem) => (props.curr ? unitColor.orange : unitColor.darkBlack)};
  font-weight: ${(props: IPagingItem) => (props.curr ? fontWeight.bold : fontWeight.normal)};
  font-size: ${fontSize.lg};
  transition: 0.2s linear;
`;

const Pagination = (props: IPaginationProps) => {
  return (
    <PagingWrapper>
      <PagingList>
        {/* {props.previous && (
          <>
            <PagingItem>
              <Link to={convertUrlToLinkHref(`/`)}>a</Link>
            </PagingItem>
            <PagingItem>
              <Link to={convertUrlToLinkHref(props.previous)}>b</Link>
            </PagingItem>
          </>
        )}

        {props.pagingList?.map((data, index) => {
          const page = data === 1 ? '/' : `page${data}`;
          const curr = data === Number(props.currPage) ? true : false;

          return (
            <PagingItem key={index}>
              <Link to={convertUrlToLinkHref(page)}>
                <a>
                  <ItemText curr={curr}>{data}</ItemText>
                </a>
              </Link>
            </PagingItem>
          );
        })}

        {props.next && (
          <>
            <PagingItem>
              <Link to={convertUrlToLinkHref(props.next)}>a</Link>
            </PagingItem>
            <PagingItem>
              <Link to={convertUrlToLinkHref(`page${props.maxPage}`)}>b</Link>
            </PagingItem>
          </>
        )} */}
      </PagingList>
    </PagingWrapper>
  );
};

export { Pagination };
