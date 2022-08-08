// dependency
import React, { createRef, useEffect } from 'react';

export interface IUtterancesProps {
  repo: string;
  theme: string;
}

const src = 'https://utteranc.es/client.js';

const Utterances = ({ repo, theme }: IUtterancesProps) => {
  const commentRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const utterances = document.createElement('script');

    const utterancesConfig = {
      src,
      repo,
      theme,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    commentRef.current!.appendChild(utterances);
  }, []);

  return <div ref={commentRef} />;
};

Utterances.displayName = 'Utterances';

export default React.memo(Utterances);
