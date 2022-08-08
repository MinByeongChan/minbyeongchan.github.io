// import React from 'react';
// import styled from '@emotion/styled';
// import {
//   faGithubSquare,
// } from '@fortawesome/free-brands-svg-icons';
// import {
//   faEnvelopeSquare,
//   faHome,
//   faPhoneSquareAlt,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import TextDefault from '../components/ui/TextDefault';
// import IntroCompo from '../components/about/IntroCompo';
// import SkillCompo from '../components/about/SkillCompo';
// import ExperiCompo from '../components/about/ExperiCompo';
// import ProjectCompo from '../components/about/ProjectCompo';
// import EduCompo from '../components/about/EduCompo';
// import ContentTitleWrapper from './about/ContentTitleWrapper';

// const Layout = styled.div(() => ({
//   padding: '50px 0',
// }));
// const ContentLayout = styled.div(() => ({
//   width: '100%',
//   maxWidth: '840px',
//   margin: '0 auto',
//   '@media screen and (min-width: 481px) and (max-width: 1080px)': {
//     minWidth: '600px',
//     padding: `0 22px`,
//   },
//   '@media screen and (min-width: 0px) and (max-width: 480px)': {
//     minWidth: '0px',
//     padding: `0 22px`,
//   },
// }));
// const IntroWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   @media screen and (min-width: 0px) and (max-width: 480px) {
//     flex-direction: column-reverse;
//     .content-item2 {
//       flex-direction: column;
//       align-items: flex-start;
//     };
//   } ;
// `;
// const IntroItem = styled.li`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   .intro-icon {
//     display: inline;
//     width: 25px;
//     height: 25px;
//     margin-right: 12px;
//   };
//   .content-icon {
//     display: inline;
//     width: 22px;
//     height: 22px;
//     margin: 0 6px;
//   };
// `;
// const ProfileImg = styled.img`
//   width: 220px;
//   height: 220px;
//   margin-right: 200px;
//   @media screen and (min-width: 0px) and (max-width: 480px) {
//     margin: 0 0 20px 0;
//     width: 200px;
//     height: 200px;
//   } ;
// `;

// const AboutLayout = () => {
//   return (
//     <main
//       className="about"
//       style={{
//         width: '100%',
//         height: '100%',
//       }}
//     >
//       {/* About Layout - 시작 */}
//       <Layout>
//         {/* Content Layout - 시작 */}
//         <ContentLayout>
//           <IntroWrapper>
//             <ul>
//               <IntroItem>
//                 <TextDefault size="h1" weight="bold" lineHeight="h1" letterSpacing="13">
//                   민 병 찬
//                 </TextDefault>
//               </IntroItem>
//               <IntroItem>
//                 <TextDefault size="lg" weight="bold" color="orange" lineHeight="lg">
//                   Front-End Developer
//                 </TextDefault>
//               </IntroItem>
//               <IntroItem>
//                 <TextDefault size="lg" lineHeight="md">
//                   서울시 구로구 고척동
//                 </TextDefault>
//               </IntroItem>
//               <IntroItem>
//                 <FontAwesomeIcon className="intro-icon" icon={faPhoneSquareAlt} />
//                 <TextDefault size="lg" lineHeight="md">
//                   <a href="tel:01077020481">(+82) 010-7702-0481</a>
//                 </TextDefault>
//               </IntroItem>
//               <IntroItem>
//                 <FontAwesomeIcon className="intro-icon" icon={faEnvelopeSquare} />
//                 <TextDefault size="lg" lineHeight="md">
//                   <a href="mailto:mbc0481@naver.com">mbc0481@naver.com</a>
//                 </TextDefault>
//               </IntroItem>
//               <IntroItem>
//                 <FontAwesomeIcon className="intro-icon" icon={faHome} />
//                 <TextDefault size="lg" lineHeight="md">
//                   <a href="https://mbc-dev-blog.vercel.app">https://mbc-dev-blog.vercel.app</a>
//                 </TextDefault>
//               </IntroItem>
//               <IntroItem>
//                 <FontAwesomeIcon className="intro-icon" icon={faGithubSquare} />
//                 <TextDefault size="lg" lineHeight="md">
//                   <a href="https://github.com/MinByeongChan">https://github.com/MinByeongChan</a>
//                 </TextDefault>
//               </IntroItem>
//             </ul>
//             <ProfileImg alt="" src="/assets/images/portpolio/profile_circle_img.png" />
//           </IntroWrapper>

//           {/* Introduction - 시작 */}
//           <ContentTitleWrapper title="Introduction.">
//             <IntroCompo />
//           </ContentTitleWrapper>
//           {/* Introduction - 끝 */}

//           {/* Skill - 시작 */}
//           <ContentTitleWrapper title="Skill.">
//             <SkillCompo />
//           </ContentTitleWrapper>
//           {/* Skill - 끝 */}

//           {/* Experience - 시작 */}
//           <ContentTitleWrapper title="Experience.">
//             <ExperiCompo />
//           </ContentTitleWrapper>
//           {/* Experience - 끝 */}

//           {/* Project - 시작 */}
//           <ContentTitleWrapper title="Project.">
//             <ProjectCompo />
//           </ContentTitleWrapper>
//           {/* Project - 끝 */}

//           {/* Education - 시작 */}
//           <ContentTitleWrapper title="Education.">
//             <EduCompo />
//           </ContentTitleWrapper>
//           {/* Education - 끝 */}
//         </ContentLayout>
//         {/* Content Layout - 끝 */}
//       </Layout>
//     </main>
//   );
// };

// export default AboutLayout;
