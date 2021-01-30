import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/theme';

const AboutLayout = ({ children, ...props }) => {
  const { no, fadeSta } = props;

  return (
    <AboutWrapper
      no={no}
      style={{
        transition: '0.5s linear',
        opacity:
          (no === 1 && 1) ||
          (no === 2 && fadeSta[0] ? 1 : 0) ||
          (no === 3 && fadeSta[1] ? 1 : 0) ||
          (no === 4 && fadeSta[2] ? 1 : 0),
      }}
    >
      {children}
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div((props) => ({
  maxWidth: '1000px',
  height: '100%',
  padding: '30px 70px',
  borderRadius: '10px',
  backgroundColor:
    (props.no === 1 && color.white) ||
    (props.no === 2 && color.darkkhaki) ||
    (props.no === 3 && color.loyalblue) ||
    (props.no === 4 && color.purple4),
  margin:
    (props.no === 1 && '50px auto 90px auto') ||
    (props.no === 2 && '90px auto 90px auto') ||
    (props.no === 3 && '90px auto 90px auto') ||
    (props.no === 4 && '90px auto 90px auto'),
  boxShadow: '0px 3px 10px 3px rgba(0,0,0,0.1)',
  '@media  (min-width: 0px) and (max-width: 768px)': {
    padding: '20px',
  },
}));

export default AboutLayout;
