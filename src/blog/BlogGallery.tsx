import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';
import { fontSize, fontWeight } from '../utils/StyleTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

import { isEmpty } from '../utils/Utility';
import GalleryWrapper from './GalleryWrapper';

export type IBlogGalleryProps = {
  galleryPosts: PostItems[];
  posts: PostItems[];
  pagination: IPaginationProps;
};

const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 20px 0 20px;
`;

const TopText = styled.div`
  font-size: ${fontSize.h1};
  font-weightL ${fontWeight.bold};
  margin-bottom: 25px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 0px) and (max-width: 481px) {
    flex-direction: column;
  } ;
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  .search-img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    :hover {
      .search-input {
        opacity: 1;
      }
    }
  }
`;
const SearchInputWrapper = styled.div`
  position: relative;
  width: 330px;
  height: 20px;
  margin-left: 10px;
`;
const SearchInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 330px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: ${fontSize.sm};
  padding-left: 5px;
  outline: none;
  transition: 0.2s linear;
  @media screen and (min-width: 0px) and (max-width: 481px) {
    width: 80%;
  } ;
`;

interface ITextCancelImg {
  search: string;
}

const TextCancelImg = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  cursor: pointer;
  right: 5px;
  top: -2px;
  z-index: 1;
  opacity: ${(props: ITextCancelImg) => (props.search.length === 0 ? '0' : '1')};
`;

const BlogGallery: React.FC<IBlogGalleryProps> = (props: IBlogGalleryProps) => {
  const router = useRouter();

  const [searchList, setSearchList] = useState<PostItems[]>([]);
  const [search, setSearch] = useState(
    router.query.search !== undefined ? router.query.search.toString() : '',
  );

  // 검색 필드 onChange
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searhFiltering(e.target.value);
  };

  const onClickRemove = () => {
    setSearch('');
  };

  // 검색 필터링 함수
  const searhFiltering = (value: string) => {
    let inputVal = value;
    setSearch(inputVal);

    // 문자열 검증
    if (!textVerify(inputVal)) {
      setSearchList([]);
      return;
    }

    if (inputVal.length > 0) {
      setSearchList(
        props.galleryPosts.filter((data) => {
          const title = data.title.toString();
          const desc = !isEmpty(data.description) ? data.description : '';
          const tags = !isEmpty(data.tags) ? data.tags.toString() : '';

          return (
            title.match(new RegExp(inputVal, 'i')) !== null ||
            desc.match(new RegExp(inputVal, 'i')) !== null ||
            tags.match(new RegExp(inputVal, 'i')) !== null
          );
        }),
      );
    } else {
      setSearchList([]);
    }
  };

  useEffect(() => {
    searhFiltering(search);
  }, [router.query.search]);

  return (
    <Layout>
      <TopWrapper>
        <TopText>Post</TopText>
        <SearchWrapper>
          <FontAwesomeIcon className="search-img" icon={faSearch} />
          <SearchInputWrapper>
            <SearchInput
              className="search-input"
              type="text"
              value={search}
              placeholder="검색내용, 태그 등을 입력해보세요!"
              onChange={onChangeSearch}
            />
            <TextCancelImg search={search} onClick={onClickRemove}>
              <FontAwesomeIcon icon={faEraser} />
            </TextCancelImg>
          </SearchInputWrapper>
        </SearchWrapper>
      </TopWrapper>

      <GalleryWrapper
        posts={isEmpty(searchList) ? props.posts : searchList}
        setSearch={setSearch}
      />

      {search.length === 0 && (
        <Pagination
          pagingList={props.pagination.pagingList}
          previous={props.pagination.previous}
          currPage={props.pagination.currPage}
          next={props.pagination.next}
          maxPage={props.pagination.maxPage}
        />
      )}
    </Layout>
  );
};

// 문자열 검증 함수
const textVerify = (input: any) => {
  for (let i in input) {
    let ascii = input[i].charCodeAt(0);
    if (ascii >= 48 && ascii <= 57) {
      continue;
    } else if (ascii >= 65 && ascii <= 90) {
      continue;
    } else if (ascii >= 97 && ascii <= 122) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

export default BlogGallery;
