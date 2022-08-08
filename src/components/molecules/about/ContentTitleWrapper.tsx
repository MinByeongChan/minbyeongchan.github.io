// dependency
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

// components
import Text from '@components/atoms/Text';

interface IContentTitleWrapper {
  title: string;
  children: ReactNode;
}

const ContentTitleWrapper = (props: IContentTitleWrapper) => {
  const { title, children } = props;

  return (
    <>
      <TitleWrapper>
        <Text tagName="h3" size="xxg" color="orange">
          {title}
        </Text>
      </TitleWrapper>
      {children}
    </>
  );
};

const TitleWrapper = styled.div`
  padding-bottom: 13px;
  margin: 70px 0 20px 0;
  border-bottom: 1px solid #9c9c9c;
`;

export default ContentTitleWrapper;
