import React from 'react';
import styled from '@emotion/styled';
import Text from '@components/atoms/Text';

export default function Error() {
  return (
    <NotFoundMain>
      <Text tagName="h3">500 &nbsp;</Text>
      <Text tagName="h3">Error</Text>
    </NotFoundMain>
  );
}

const NotFoundMain = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
}));
