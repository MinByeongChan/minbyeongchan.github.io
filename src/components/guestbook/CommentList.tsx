import styled from '@emotion/styled';
import React, { useState } from 'react';
import { color, fontSize } from '../../utils/StyleTheme';
import TextDefault from '../ui/TextDefault';

interface iCommentBottomWrapper {
  enable?: boolean;
}
const CommentItems = styled.ul`
  width: 100%;
  margin-top: 60px;
`;
const CommentItem = styled.li`
  width: 100%;
  max-width: 460px;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    min-width: 0px;
    padding: 0 22px;
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
// const TextInput = styled.input<iCommentBottomWrapper>`
//   display: ${(props) => !props.enable && 'none'};
//   height: ${(props) => !props.enable && '0px'};
//   background-color: inherit;
//   border: none;
//   border-bottom: 2px solid ${color.orange};
//   font-size: ${fontSize.md};
//   letter-spacing: 1px;
//   margin-top: 2px;
//   margin-left: 8px;
//   &:focus {
//     outline: none;
//   }
//   @media screen and (min-width: 0px) and (max-width: 480px) {
//     max-width: 200px;
//   } ;
// `;

const ComentList = () => {
  const [reply, setReply] = useState(false);

  return (
    <CommentItems>
      <CommentItem>
        <CommentLayout>
          <TextDefault size="md" letterSpacing="1">
            Hello Comment, 안녕하세요 MBC 블로그입니다.
          </TextDefault>
        </CommentLayout>
        <CommentBottomWrapper>
          <TextDefault size="sm" lineHeight="sm" letterSpacing="1">
            MBC
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

          <span style={{ margin: '0 8px', fontSize: fontSize.xs }}>|</span>

          <TextWrapper>
            <TextDefault size="sm" lineHeight="sm" letterSpacing="1">
              답글
            </TextDefault>
          </TextWrapper>

          <span style={{ margin: '0 8px', fontSize: fontSize.xs }}>|</span>

          <TextDefault size="xs" color="gray" lineHeight="sm" letterSpacing="1">
            2021.04.27
          </TextDefault>
        </CommentBottomWrapper>
        {/* <CommentBottomWrapper enable={reply}>
          <TextInput enable={reply} type="text" />
        </CommentBottomWrapper> */}
      </CommentItem>
    </CommentItems>
  );
};

export default ComentList;
