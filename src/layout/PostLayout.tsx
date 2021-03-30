import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import styled from '@emotion/styled';
import { fontSize, fontWeight } from '../utils/StyleTheme';
import { Content } from '../content/Content';

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
};

const Title = styled.h1`
  font-size: ${fontSize.h1};
  font-weight: ${fontWeight.bold};
  margin-bottom: 30px;
`;

const PostLayout = (props: IPostProps) => {
  return (
    <div style={{ padding: '60px 20px' }}>
      <div>
        <Title>{props.title}</Title>
      </div>
      <div>{format(new Date(props.date), 'LLLL d, yyyy')}</div>

      <Content>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </Content>
    </div>
  );
};

PostLayout.propTypes = {};

export default PostLayout;
