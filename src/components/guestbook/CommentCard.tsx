import styled from '@emotion/styled';
import React from 'react';
import { color, fontSize } from '../../utils/StyleTheme';
import TextDefault from '../ui/TextDefault';

interface iCommentBottomWrapper {
  enable?: boolean;
}
interface iCommentCard {
  [key: string]: any;
}
interface iCardData {
  created_at: string;
  id: number;
  message: string;
  modified_at?: string;
  name: string;
  password?: string;
  secret: number;
}
const CommentItem = styled.li`
  width: 100%;
  max-width: 600px;
  margin-bottom: 18px;
  @media screen and (min-width: 481px) and (max-width: 1080px) {
    max-width: 480px;
    padding: 0 22px;
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    max-width: 480px;
    padding: 0;
  } ;
`;
const CommentLayout = styled.div`
  width: 100%;
  height: auto;
  background-color: ${color.darkWhite};
  border-radius: 20px;
  padding: 12px 30px;
`;

const CommentBottomWrapper = styled.div<iCommentBottomWrapper>`
  display: ${(props) => (!props.enable ? 'none' : 'flex')};
  height: ${(props) => !props.enable && '0px'};
  display: flex;
  align-items: flex-end;
  padding: 5px 0 0 30px;
`;
const TextWrapper = styled.div`
  transition: 0.1s linear;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;

const CommentCard = (props: iCommentCard) => {
  const cardData: iCardData = props.cardData;
  console.log('cardData', cardData);

  return (
    <CommentItem>
      <CommentLayout>
        <TextDefault size="md" letterSpacing="1">
          {cardData.message}
        </TextDefault>
      </CommentLayout>
      <CommentBottomWrapper enable={true}>
        <TextDefault size="sm" lineHeight="sm" letterSpacing="1">
          {cardData.name}
        </TextDefault>

        <span style={{ margin: '0 8px', fontSize: fontSize.xs }}>|</span>

        <TextWrapper>
          <TextDefault size="sm" lineHeight="sm" letterSpacing="1">
            수정
          </TextDefault>
        </TextWrapper>

        <span style={{ margin: '0 8px', fontSize: fontSize.xs }}>|</span>

        <TextWrapper>
          <TextDefault size="sm" lineHeight="sm" letterSpacing="1">
            삭제
          </TextDefault>
        </TextWrapper>

        {/* <span style={{ margin: '0 8px', fontSize: fontSize.xs }}>|</span>

          <TextWrapper>
            <TextDefault size="sm" lineHeight="sm" letterSpacing="1">
              답글
            </TextDefault>
          </TextWrapper> */}

        <span style={{ margin: '0 8px', fontSize: fontSize.xs }}>|</span>

        <TextDefault size="xs" color="gray" lineHeight="sm" letterSpacing="1">
          2021.04.27
        </TextDefault>
      </CommentBottomWrapper>
      {/* <CommentBottomWrapper enable={reply}>
          <TextInput enable={reply} type="text" />
        </CommentBottomWrapper> */}
    </CommentItem>
  );
};

export default CommentCard;
