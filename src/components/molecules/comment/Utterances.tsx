// import React, { createRef, useEffect } from 'react';

// const src = 'https://utteranc.es/client.js';

// export interface IUtterancesProps {
//   repo: string;
//   theme: string;
// }

// const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo, theme }) => {
//   const commentRef = createRef<HTMLDivElement>();

//   useEffect(() => {
//     const utterances = document.createElement('script');

//     const utterancesConfig = {
//       src,
//       repo,
//       theme,
//       'issue-term': 'pathname',
//       crossorigin: 'anonymous',
//       async: 'true',
//     };

//     Object.entries(utterancesConfig).forEach(([key, value]) => {
//       utterances.setAttribute(key, value);
//     });

//     commentRef.current!.appendChild(utterances);
//   }, []);

//   return <div ref={commentRef} />;
// });

// Utterances.displayName = 'Utterances';

// export default Utterances;
