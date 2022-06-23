import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { color as fontColor, fontSize, fontWeight, lineHeight as lh } from '@utils/StyleTheme';

const Text = (props: IText) => {
  const { children, size, color, weight, lineHeight, letterSpacing } = props;

  return (
    <TextWrapper
      size={size ? fontSize[`${size}`] : fontSize[`${fontSize.md}`]}
      color={color ? fontColor[`${color}`] : ''}
      weight={weight ? fontWeight[`${weight}`] : fontWeight[`${fontWeight.normal}`]}
      lineHeight={lineHeight ? lh[`${lineHeight}`] : lh[`${lh.md}`]}
      letterSpacing={letterSpacing}
    >
      {children}
    </TextWrapper>
  );
};

interface IText {
  size?: string;
  color?: string;
  weight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  children?: ReactNode;
}

const TextWrapper = styled.span`
  font-size: ${(props: IText) => props.size};
  color: ${(props: IText) => props.color};
  font-weight: ${(props: IText) => props.weight};
  line-height: ${(props: IText) => props.lineHeight};
  letter-spacing: ${(props: IText) => props.letterSpacing}px;

  @media (min-width: 500px) and (max-width: 820px) {
    font-size: ${(props: IText) =>
      (props.size === 'h1' && fontSize.xxg) ||
      (props.size === 'xxg' && fontSize.xg) ||
      (props.size === 'xg' && fontSize.lg) ||
      (props.size === 'lg' && fontSize.lg) ||
      (props.size === 'md' && fontSize.md)};
  }
  @media (min-width: 0px) and (max-width: 499px) {
    font-size: ${(props: IText) =>
      (props.size === 'h1' && fontSize.xxg) ||
      (props.size === 'xxg' && fontSize.xg) ||
      (props.size === 'xg' && fontSize.lg) ||
      (props.size === 'lg' && fontSize.md) ||
      (props.size === 'md' && fontSize.sm) ||
      (props.size === 'sm' && fontSize.xs)};
  } ;
`;

export default Text;
