import { unified } from 'unified';
import remarkParse from 'remark-parse';
import gfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypePrism from '@mapbox/rehype-prism';
import html from 'rehype-stringify';

export const getMarkdown = (mdText: string) => {
  const htmlText = unified()
    .use(remarkParse)
    .use(gfm)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(html)
    .processSync(mdText);

  return String(htmlText);
};
