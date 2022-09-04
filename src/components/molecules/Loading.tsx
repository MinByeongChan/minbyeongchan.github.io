// dependency
import React from 'react';
import styled from '@emotion/styled';
import LoadingSvg from '@assets/loading.svg';

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingSvg />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
`;
