// import React, { useEffect, useState } from "react";
// import styled from "@emotion/styled";
// import { color, fontSize, fontWeight } from "../../styles/theme";
// import { Link } from "react-router-dom";

// const NavUlDefault = styled.ul`
//   display: inline-flex;
//   height: 100%;
//   align-items: center;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavLiDefault = styled.li`
//   position: relative;
//   height: 100%;
//   margin: 0 2rem;
// `;

// const NavLiText = styled.div((props) => ({
//   color: `${color.lightBlack}`,
//   fontSize: `${fontSize.md}`,
//   fontWeight: `${fontWeight.bold}`,
//   lineHeight: "66px",
//   transition: "0.1s linear",
//   opacity: "1",
//   ":hover": {
//     opacity: "0.5",
//   },
// }));

// const NavListBotLine = styled.div((props) => ({
//   position: "absolute",
//   bottom: `${props.isOpen ? "0px" : "-4px"}`,
//   width: `100%`,
//   height: "4px",
//   backgroundColor: "#55acee",
//   opacity: `${props.isOpen ? 1 : 0}`,
//   transition: "0.2s linear",
// }));

// /**
//  * @function AppNavListCompo
//  * @description 네비게이션 바 리스트 컴포넌트
//  * @author MBC
//  */
// const AppNavListCompo = ({ navList, onClickNav }) => {
//   const [animState, setAnimState] = useState(
//     navList.map((elem) => {
//       return elem.isClick;
//     })
//   );

//   // 마우스 Over handler
//   const handleMounseOver = (id) => {
//     setAnimState(
//       animState.map((data, navId) => {
//         return navId === id ? true : false;
//       })
//     );
//   };

//   // 마우스 Leave handler
//   const handleMouseLeave = () => {
//     resetAnimState();
//   };

//   // 애니메이션 State reset
//   const resetAnimState = () => {
//     let key;
//     navList.forEach((data, id) => {
//       if (data.isClick) {
//         key = id;
//       }
//     });

//     setAnimState(
//       animState.map((data, id) => {
//         return key === id ? true : false;
//       })
//     );
//   };

//   // 리스트 생성 함수
//   const makeList = (list) => {
//     return (
//       <NavUlDefault onMouseLeave={handleMouseLeave}>
//         {list.map((data, id) => (
//           <NavLiDefault
//             key={id}
//             onMouseOver={() => handleMounseOver(id)}
//             onClick={() => onClickNav(id)}
//           >
//             <Link to={`${data.path}`}>
//               <NavLiText>{data.name}</NavLiText>
//             </Link>
//             <NavListBotLine key={id} isOpen={animState[id]} />
//           </NavLiDefault>
//         ))}
//       </NavUlDefault>
//     );
//   };

//   useEffect(() => {
//     resetAnimState();
//   }, [navList]);

//   return <div style={{ position: "relative" }}>{makeList(navList)}</div>;
// };

// export default AppNavListCompo;
