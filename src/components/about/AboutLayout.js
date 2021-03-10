import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/theme';

const AboutLayout = ({ children, ...props }) => {
  const { no } = props;

  return (
    <AboutWrapper
      no={no}
      style={{
        transition: '0.5s linear',
      }}
    >
      {children}
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section((props) => ({
  display: 'flex',
  position: 'relative',
  alignItems: props.no === 1 ? 'center' : 'flex-start',
  maxWidth: '1200px',
  height: 'calc(80vh)',
  padding: '50px 60px',
  borderRadius: '10px',
  backgroundColor:
    (props.no === 1 && color.white) ||
    (props.no === 2 && color.lightblue) ||
    (props.no === 3 && color.dodgerblue) ||
    (props.no === 4 && color.purple4),
  // margin:
  //   (props.no === 1 && '50px auto 90px auto') ||
  //   (props.no === 2 && '90px auto 90px auto') ||
  //   (props.no === 3 && '90px auto 90px auto') ||
  //   (props.no === 4 && '90px auto 90px auto'),
  margin: '30px auto',
  boxShadow: '0px 3px 10px 3px rgba(0,0,0,0.1)',
  '@media  (min-width: 0px) and (max-width: 768px)': {
    padding: '15px',
    margin: '15px',
  },
}));

export default AboutLayout;
