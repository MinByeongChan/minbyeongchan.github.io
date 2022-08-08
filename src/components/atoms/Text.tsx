import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { unitColor as fontColor, fontSize, fontWeight, lineHeight as lh } from '@utils/StyleTheme';

interface IText {
  className?: string;
  tagName?: 'h1' | 'h2' | 'h3' | 'pre' | 'span' | 'p';
  size?: string;
  color?: string;
  weight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  children?: ReactNode;
}

const Text = (props: IText) => {
  const { tagName = 'span', children } = props;

  const renderByTagName = () => {
    switch (tagName) {
      case 'h1':
        return <H1 {...props}>{children}</H1>;
      case 'h2':
        return <H2 {...props}>{children}</H2>;
      case 'h3':
        return <H3 {...props}>{children}</H3>;
      case 'pre':
        return <Pre {...props}>{children}</Pre>;
      case 'p':
        return <P {...props}>{children}</P>;
      case 'span':
        return <Span {...props}>{children}</Span>;
      default:
        return <Span {...props}>{children}</Span>;
    }
  };

  return renderByTagName();
};

const getStyledByProps = ({ size, weight, lineHeight, color, letterSpacing }: IText) => ({
  fontSize: fontSize[size],
  fontWeight: fontWeight[weight] as string,
  lineHeight: lh[lineHeight] as string,
  color,
  letterSpacing,
});

const H1 = styled.h1(
  {
    fontSize: fontSize.h1,
    color: fontColor.black,
    margin: 0,
  },
  getStyledByProps,
);
const H2 = styled.h2(
  {
    fontSize: fontSize.h2,
    color: fontColor.black,
    margin: 0,
  },
  getStyledByProps,
);
const H3 = styled.h3(
  {
    fontSize: fontSize.h3,
    color: fontColor.black,
    margin: 0,
  },
  getStyledByProps,
);
const Pre = styled.pre(
  {
    fontSize: fontSize.md,
    color: fontColor.black,
  },
  getStyledByProps,
);
const P = styled.p(
  {
    fontSize: fontSize.md,
    color: fontColor.black,
  },
  getStyledByProps,
);
const Span = styled.span(
  {
    fontSize: fontSize.md,
    color: fontColor.black,
  },
  getStyledByProps,
);

export default Text;
