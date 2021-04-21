import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight } from '../utils/StyleTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
  ".paging-item-icon": {
    width:"14px",
    height: '14px',
    transition: "0.2s linear"
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
          <>
            <PagingItem>
              <Link href={convertUrlToLinkHref(`/`)} as={`/`}>
                <a>
                <FontAwesomeIcon className="paging-item-icon" icon={faAngleDoubleLeft} />
                </a>
              </Link>
            </PagingItem>
            <PagingItem>
              <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
                <a>
                <FontAwesomeIcon className="paging-item-icon" icon={faAngleLeft} />
                </a>
              </Link>
            </PagingItem>
          </>
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
          <>
            <PagingItem>
              <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
                <a>
                <FontAwesomeIcon className="paging-item-icon" icon={faAngleRight} />
                </a>
              </Link>
            </PagingItem>
            <PagingItem>
              <Link href={convertUrlToLinkHref(`page${props.maxPage}`)} as={`page${props.maxPage}`}>
                <a>
                  <FontAwesomeIcon className="paging-item-icon" icon={faAngleDoubleRight} />
                </a>
              </Link>
            </PagingItem>          
          </>
        )}
      </PagingList>
    </PagingWrapper>
  );
};

export { Pagination };
