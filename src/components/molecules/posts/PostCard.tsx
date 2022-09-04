// dependency
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { unitColor, fontSize, fontWeight } from '@utils/StyleTheme';
import { IPostsAtom } from '@store/posts';
import { getDateFormat } from '@utils/Utility';
import { Config } from '@utils/Config';
import HashtagSvg from '@assets/hashtag.svg';

// components
import Text from '@components/atoms/Text';

type IPostCard = {
  post: IPostsAtom;
};

export default function PostCard(props: IPostCard) {
  const { post } = props;
  const { fileName, title, date, description, tags } = post;

  const getPostDate = (dateArg: string) => {
    const date = getDateFormat(dateArg);
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    return `${year}.${month}.${day}`;
  };

  const getPathName = () => fileName.replace('.md', '');

  return (
    <PostCardItem>
      <Link to={`/content?id=${getPathName()}`}>
        <CardTitle>{title}</CardTitle>
      </Link>
      <CardAuthor>
        <Text>by </Text>
        <AuthorLink href="https://github.com/MinByeongChan">{String(Config.author)}</AuthorLink>
        <Text size="sm"> on {getPostDate(date)}</Text>
      </CardAuthor>
      <CardDesc>
        <Text size="sm">{description}</Text>
      </CardDesc>
      <CardTags>
        <HashtagSvg width="16" height="16" />
        {tags.length !== 0
          ? tags.map((item, index) => (
              <Link to={`/?search=${item}`} key={index}>
                <CardTagItem>{item}</CardTagItem>
              </Link>
            ))
          : '-'}
      </CardTags>
    </PostCardItem>
  );
}

const PostCardItem = styled.div`
  width: 100%;
  color: ${unitColor.darkBlack};
`;

const CardTitle = styled.h3`
  font-size: ${fontSize.xg};
  margin: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const CardAuthor = styled.div`
  font-size: ${fontSize.sm};
  margin-top: 9px;
`;

const AuthorLink = styled.a`
  font-weight: ${fontWeight.bold};
  color: ${unitColor.orange};
`;

const CardDesc = styled.div`
  margin-top: 9px;
`;

const CardTags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const CardTagItem = styled.span`
  font-size: ${fontSize.sm};
  margin-left: 7px;
  float: left;
  transition: 0.1s ease-in-out;
  &:hover {
    opacity: 0.7;
    box-shadow: 0px 2px 0px;
  }
`;
