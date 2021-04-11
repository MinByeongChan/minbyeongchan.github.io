import React from 'react';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import AboutLayout2 from '../../layout/AboutLayout2';
import { Config } from '../../utils/Config';

const About = () => (
  <Main meta={<Meta title={"About"} description={'MBC About'} />}>
    <AboutLayout2 />
  </Main>
);

export default About;
