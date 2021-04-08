import styled from '@emotion/styled';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { format } from 'date-fns';
import React from 'react';
import { Config } from '../utils/Config';
import { PostItems } from '../utils/Content';
import { color, fontSize, fontWeight } from '../utils/StyleTheme';
import { isEmpty } from '../utils/Utility';

export type IGalleryWrapperProps = {
  posts: PostItems[];
  setSearch: Function;
};

const GalleryContainer = styled.div(() => ({
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

const GalleryWrapper = (props: IGalleryWrapperProps) => {
  const { posts, setSearch } = props;

  return (
    <GalleryContainer>
      {!isEmpty(posts) &&
        posts.map((elt, index) => (
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
    </GalleryContainer>
  );
};

export default GalleryWrapper;
