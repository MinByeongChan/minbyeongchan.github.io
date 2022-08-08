const fs = require('fs');
const path = require('path');

const filterlineToMetaKey = (keyword, line) => {
  const key = line.split(`${keyword}:`)[1].trim();
  return key.substring(1, key.length - 1);
};

module.exports = function () {
  const createMeta = (item) => {
    const { name } = item;
    let flag = 0;
    let postMeta = {
      title: '',
      description: '',
      date: '',
      modifiedDate: '',
      tags: [],
      fileName: '',
    };

    const buffer = fs.readFileSync(path.resolve(__dirname, `../_posts/${name}`));
    buffer
      .toString()
      .split(/\n/)
      .forEach(function (line) {
        if (flag === 2) return;
        if (line === '---') {
          flag++;
        }

        if (flag === 1) {
          if (line.includes('title:')) {
            postMeta.title = filterlineToMetaKey('title', line);
          } else if (line.includes('description:')) {
            postMeta.description = filterlineToMetaKey('description', line);
          } else if (line.includes('date:')) {
            postMeta.date = filterlineToMetaKey('date', line);
          } else if (line.includes('modified_date:')) {
            postMeta.modified_date = filterlineToMetaKey('modified_date', line);
          } else if (line.includes('tags:')) {
            const tagsArray = filterlineToMetaKey('tags', line);
            postMeta.tags = tagsArray.split(',').map((data) => data.trim());
          }
        }
      });

    postMeta.fileName = name;

    return postMeta;
  };

  const postList = fs
    .readdirSync(path.resolve(__dirname, '../_posts'), { withFileTypes: true })
    .filter((item) => !item.isDirectory())
    .map(createMeta);

  fs.writeFileSync(
    path.resolve(__dirname, '../public/assets/posts.json'),
    JSON.stringify(postList),
  );
  fs.writeFileSync(path.resolve(__dirname, '../src/assets/posts.json'), JSON.stringify(postList));
};
