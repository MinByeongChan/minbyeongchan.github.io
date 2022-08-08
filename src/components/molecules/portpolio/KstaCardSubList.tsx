// dependency
import React from 'react';
import styled from '@emotion/styled';
import { unitColor } from '@utils/StyleTheme';
import CheckIcon from '@assets/check.svg';

// components
import Text from '@components/atoms/Text';

export default function KstaCardSubList() {
  return (
    <DescItems>
      <DescItem>
        <IconWrapper>
          <CheckIcon width="16px" height="16px" />
        </IconWrapper>
        <Text size="md" color="white">
          Front-End 영역 개발 담당
        </Text>
      </DescItem>
      <DescItem>
        <IconWrapper>
          <CheckIcon width="16px" height="16px" />
        </IconWrapper>
        <Text size="md" color="white">
          Back-End 매출 내역 API 연동 개발
        </Text>
      </DescItem>
      <DescItem>
        <IconWrapper>
          <CheckIcon width="16px" height="16px" />
        </IconWrapper>
        <Text size="md" color="white">
          UI/UX 개발
        </Text>
      </DescItem>
    </DescItems>
  );
}

const DescItems = styled.ul`
  margin: 15px 0 0 5px;
`;
const DescItem = styled.li`
  display: flex;
  align-items: center;
  margin: 3px 0;
`;
const IconWrapper = styled.div`
  margin: 0 8px 0 0;
  color: ${unitColor.white};
  width: 16px;
  height: 16px;
`;
