import React from 'react';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import AboutLayout from '../../layout/AboutLayout';

const About = () => (
  <Main meta={<Meta title={"About"} description={'MBC About'} />}>
    <AboutLayout />
  </Main>
);

export default About;
