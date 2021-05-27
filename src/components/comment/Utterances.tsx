import React, { createRef, useEffect } from 'react';

const Utterances = () => {
  const commentRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const utterances = document.createElement('script');

    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'MinByeongChan/mbc-devBlog',
      'issue-term': 'pathname',
      theme: 'github-light',
      label: '✨💬 comments ✨',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    commentRef.current!.appendChild(utterances);
  }, []);

  return <div className="comments" ref={commentRef}></div>;
};

export default Utterances;
