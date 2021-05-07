import styled from '@emotion/styled';
import React from 'react';
import CommentCard from './CommentCard';

const CommentItems = styled.ul`
  width: 100%;
  margin-top: 60px;
`;
export interface iCommentList {
  [key: string]: any;
}

const CommentList = (props: iCommentList) => {
  const { list, onClickDelete, onClickUpdate } = props;
  return (
    <CommentItems>
      {list.map((data: any) => (
        <CommentCard
          cardData={data}
          key={data.id}
          onClickDelete={onClickDelete}
          onClickUpdate={onClickUpdate}
        />
      ))}
    </CommentItems>
  );
};

export default CommentList;
