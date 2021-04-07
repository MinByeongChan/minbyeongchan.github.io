import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';
import { color, fontSize, fontWeight } from '../utils/StyleTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTags } from '@fortawesome/free-solid-svg-icons';
import { useRouter, withRouter } from 'next/router';
import { Config } from '../utils/Config';
import { useDispatch } from 'react-redux';

import { setPosts as setReduxPosts } from '../modules/posts';

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

const GalleryWrapper = styled.div(() => ({
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '10px',
  '@media screen and (min-width: 481px) and (max-width: 1080px)': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    gridTemplateColumns: '1fr',
  },
}));

const GalleryItem = styled.div`
  width: 100%;
  color: ${color.darkBlack};
  padding: 25px 12px;
  .gallery-item-title {
    display: inline;
    font-size: ${fontSize.xxg};
    cursor: pointer;
    &:hover {
      box-shadow: 0px 2px 0px;
    }
  }
  .gallery-item-author {
    font-size: ${fontSize.sm};
    margin-top: 9px;
    .gallery-item-date {
      font-weight: ${fontWeight.bold};
    }
    a {
      font-weight: ${fontWeight.bold};
      color: ${color.orange};
    }
  }
  .gallery-item-desc {
    font-size: ${fontSize.md};
    margin-top: 9px;
  }
  .gallery-item-tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    .tags-img {
      width: 15px;
      height: auto;
      margin-right: 6px;
    }
    .tag-item {
      font-size: ${fontSize.sm};
      margin: 0 3px 2px 0;
      float: left;
      &:hover {
        opacity: 0.7;
        box-shadow: 0px 2px 0px;
      }
    }
  }
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .search-img {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    cursor: pointer;
    :hover {
      .search-input {
        opacity: 1;
      }
    }
  }
  @media screen and (min-width: 0px) and (max-width: 481px) {
    flex-direction: column;
  } ;
`;

const SearchInput = styled.input`
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

const BlogGallery: React.FC<IBlogGalleryProps> = (props: IBlogGalleryProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [posts, setPosts] = useState(props.posts);
  const [search, setSearch] = useState(
    router.query.search !== undefined ? router.query.search.toString() : '',
  );

  // 검색 필드 onChange
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searhFiltering(e.target.value);
  };

  // 검색 필터링 함수
  const searhFiltering = (value: string) => {
    let inputVal = value;
    setSearch(inputVal);

    if (inputVal.length > 0) {
      const tmp = props.posts.filter((data) => {
        const title = data.title.toString();
        const desc = data.description.toString();
        const tags = data.tags.toString();

        return (
          title.match(new RegExp(inputVal, 'i')) !== null ||
          desc.match(new RegExp(inputVal, 'i')) !== null ||
          tags.match(new RegExp(inputVal, 'i')) !== null
        );
      });

      setPosts(tmp);
    } else {
      setPosts(props.posts);
    }
  };

  useEffect(() => {
    searhFiltering(search);
    dispatch(setReduxPosts(props.galleryPosts));
  }, [router.query.search]);

  // console.log('prpos.posts', props.posts);

  return (
    <Layout>
      <TopWrapper>
        <TopText>Post</TopText>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SearchInput
            className="search-input"
            type="text"
            value={search}
            placeholder="검색내용, 태그 등을 입력해보세요!"
            onChange={onChangeSearch}
          />
          <div>
            <FontAwesomeIcon className="search-img" icon={faSearch} />
          </div>
        </div>
      </TopWrapper>
      <GalleryWrapper>
        {posts.map((elt, index) => (
          <GalleryItem key={index}>
            <div style={{ padding: '15px 15px 20px 15px' }}>
              <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
                <a>
                  <h2 className="gallery-item-title">{elt.title}</h2>
                </a>
              </Link>
              <div className="gallery-item-author">
                by <a href="https://github.com/MinByeongChan">{Config.author}</a> on{' '}
                <span className="gallery-item-date">
                  {format(new Date(elt.date), 'LLL d, yyyy')}
                </span>
              </div>
              <div className="gallery-item-desc">{elt.description}</div>
              <div className="gallery-item-tags">
                <FontAwesomeIcon className={'tags-img'} icon={faTags} />
                <div>
                  {elt.tags !== undefined
                    ? elt.tags.map((item, index) => (
                        <Link href={`/?search=${item}`} key={index}>
                          <a className="tag-item" key={index} onClick={() => setSearch(item)}>
                            {item}
                          </a>
                        </Link>
                      ))
                    : '-'}
                </div>
              </div>
            </div>
          </GalleryItem>
        ))}
      </GalleryWrapper>

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

export default withRouter(BlogGallery);
