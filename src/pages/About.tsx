// dependency
import React from 'react';
import styled from '@emotion/styled';

// components
import IntroCard from '@components/molecules/about/IntroductionCard';
import IntroPhrase from '@components/molecules/about/IntroductionPhrase';
import Skill from '@components/molecules/about/Skill';
import WorkExperience from '@components/molecules/about/WorkExperience';
import Project from '@components/molecules/about/Project';
import Education from '@components/molecules/about/Education';
import ContentTitleWrapper from '@components/molecules/about/ContentTitleWrapper';

const About = () => {
  return (
    <AboutLayout className="about">
      <ContentLayout>
        <IntroCard />
        <div style={{ marginTop: '30px' }}>
          <IntroPhrase />
        </div>

        <ContentTitleWrapper title="Skill">
          <Skill />
        </ContentTitleWrapper>

        <ContentTitleWrapper title="Work experience">
          <WorkExperience />
        </ContentTitleWrapper>

        <ContentTitleWrapper title="Project">
          <Project />
        </ContentTitleWrapper>

        <ContentTitleWrapper title="Education">
          <Education />
        </ContentTitleWrapper>
      </ContentLayout>
    </AboutLayout>
  );
};

const AboutLayout = styled.main(() => ({
  width: '100%',
  height: '100%',
  padding: '50px 0',
}));
const ContentLayout = styled.div(() => ({
  width: '100%',
  maxWidth: '840px',
  margin: '0 auto',
  '@media screen and (min-width: 481px) and (max-width: 1080px)': {
    minWidth: '600px',
    padding: `0 22px`,
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    minWidth: '0px',
    padding: `0 22px`,
  },
}));

export default About;
