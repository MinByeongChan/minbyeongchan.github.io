// dependency
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { filteredPostsAtom, postsAtom } from '@store/posts';
import { useAtom } from 'jotai';
import { fontSize, unitColor } from '@utils/StyleTheme';
import CancelSvg from '@assets/cancel.svg';
import SearchSvg from '@assets/search.svg';

interface ISearch {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search(props: ISearch) {
  const { searchInput, setSearchInput } = props;

  const [posts] = useAtom(postsAtom);
  const [filteredPosts, setFilteredPosts] = useAtom(filteredPostsAtom);

  // 검색 필터링 함수
  const filterPosts = (value: string) => {
    setFilteredPosts(
      posts.filter((data) => {
        const { title, tags } = data;

        return (
          title.match(new RegExp(value, 'i')) !== null ||
          (tags.length !== 0 && tags.join(' ').match(new RegExp(value, 'i')) !== null)
        );
      }),
    );
  };

  // 검색 필드 onChange
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInput(value);

    if (value.length === 0) {
      return;
    }
    filterPosts(value.trim());
  };

  const onClickRemove = () => {
    setSearchInput('');
  };

  useEffect(() => {
    filterPosts(searchInput);
  }, [searchInput]);

  return (
    <SearchWrapper>
      <SearchSvg width="25" height="25" />

      <SearchInputWrapper>
        <SearchInput
          className="search-input"
          type="text"
          value={searchInput}
          placeholder="검색내용, 태그 등을 입력해보세요!"
          onChange={onChangeSearch}
        />
        <CancelSvgWrapper search={searchInput} onClick={onClickRemove}>
          <CancelSvg />
        </CancelSvgWrapper>
      </SearchInputWrapper>
    </SearchWrapper>
  );
}

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
  top: 0;
  left: 0;
  width: 330px;
  background: none;
  border: none;
  border-bottom: 1px solid #000;
  font-size: ${fontSize.md};
  padding-left: 5px;
  padding-bottom: 3px;
  outline: none;
  transition: 0.2s linear;
  z-index: 0;
  border-radius: 3px;
  &:focus {
    box-shadow: 0px 0px 4px 4px rgba(30, 144, 255, 0.5);
  }
  @media screen and (min-width: 0px) and (max-width: 481px) {
    width: 80%;
  } ;
`;

const CancelSvgWrapper = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  cursor: pointer;
  right: 5px;
  top: -2px;
  z-index: 1;
  opacity: ${({ search }: { search: string }) => (search.length === 0 ? '0' : '1')};
  transition: 0.2s linear;
  & svg {
    width: inherit;
    height: inherit;
  }
`;
