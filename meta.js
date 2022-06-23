const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  template: './public/index.html',
  title: `MBC Dev Blog | 기술블로그${process.env.ENV === 'developement' && ' | 개발'}`,
  meta: {
    title: { name: 'title', property: 'og:title', content: process.env.title },
    description: {
      name: 'description',
      property: 'og:description',
      content: process.env.description,
    },
    keyword: { name: 'keywords', content: process.env.keyword },
    author: {
      name: 'author',
      key: 'author',
      content: process.env.author,
    },
    publisher: {
      name: 'publisher',
      key: 'publisher',
      content: process.env.author,
    },
    publishDate: {
      name: 'publishDate',
      key: 'publishDate',
      content: new Date().toISOString(),
    },
    modifiedDate: {
      name: 'modifiedDate',
      key: 'modifiedDate',
      content: new Date().toISOString(),
    },
    'og:type': { property: 'og:type', content: 'website' },
    'og:url': { property: 'og:url', content: `${process.env.base_url}` },
    'og:image': { property: 'og:image', content: `${process.env.base_url}/mbc_img.png` },
    'og:locale': { property: 'og:locale', content: process.env.locale },
    'og:site_name': { property: 'og:site_name', content: process.env.site_name },
  },
};
