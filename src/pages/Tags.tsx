// // dependency
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { unitColor, fontSize, fontWeight } from '@utils/StyleTheme';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { postsAtom } from '@store/posts';
import Text from '@components/atoms/Text';

interface iTagItemStyle {
  itemBgColor?: string;
  itemColor?: string;
  itemWeight?: string;
}

interface ITag {
  name: string;
  count: number;
}

const Tags = () => {
  const [posts] = useAtom(postsAtom);
  const [tags, setTags] = useState<ITag[]>([]);

  const makeColor = (cnt: number) => {
    let itemBgColor: string;
    let itemColor: string;
    let itemWeight: string;
    if (1 <= cnt && cnt <= 5) {
      itemBgColor = unitColor.gainsboro;
      itemColor = unitColor.black;
      itemWeight = fontWeight.light;
    } else if (6 <= cnt && cnt <= 10) {
      itemBgColor = unitColor.lightgrey;
      itemColor = unitColor.black;
      itemWeight = fontWeight.normal;
    } else if (11 <= cnt && cnt <= 15) {
      itemBgColor = unitColor.darkgray;
      itemColor = unitColor.black;
      itemWeight = fontWeight.normal;
    } else if (16 <= cnt) {
      itemBgColor = unitColor.lightskyblue;
      itemColor = unitColor.black;
      itemWeight = fontWeight.bold;
    } else {
      itemBgColor = unitColor.darkWhite;
      itemColor = unitColor.black;
      itemWeight = fontWeight.light;
    }
    return [itemBgColor, itemColor, itemWeight];
  };

  const createTagInstance = () => {
    let tagInstance = {};

    posts.forEach(({ tags }) => {
      tags.forEach((tagName) => {
        if (!tagInstance.hasOwnProperty(tagName)) {
          tagInstance[tagName] = 0;
          return;
        }
        tagInstance[tagName] = tagInstance[tagName] + 1;
      });
    });

    return tagInstance;
  };

  const createTagArray = (tagInstance) => {
    const tagsArray = Object.keys(tagInstance).map((key) => ({
      name: key as string,
      count: tagInstance[key] as number,
    }));

    // 태그 배열 정렬
    return tagsArray.sort((a, b) => b.count - a.count);
  };

  useEffect(() => {
    const tagInstance = createTagInstance();
    const tagsArray = createTagArray(tagInstance);
    setTags(tagsArray);
  }, [posts]);

  return (
    <Layout>
      <TopWrapper>
        <Text tagName="h2">Tags</Text>
      </TopWrapper>

      <div>블로그에 게시된 태그 저장소입니다. 태그를 클릭하시면 관련 게시물을 볼 수 있습니다.</div>

      <TagItemList>
        {tags.map(({ name, count }, index) => {
          // 태그 갯수에 따른 li 색상 설정
          const [itemBgColor, itemColor, itemWeight] = makeColor(count);

          return (
            <TagItem
              key={index}
              itemBgColor={itemBgColor}
              itemColor={itemColor}
              itemWeight={itemWeight}
            >
              <Link to={`/?search=${name}`}>{name}</Link>
            </TagItem>
          );
        })}
      </TagItemList>
    </Layout>
  );
};

const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 20px 0 20px;
`;

const TopWrapper = styled.div`
  margin-bottom: 30px;
`;

const TagItemList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const TagItem = styled.li`
  float: left;
  padding: 8px 10px;
  margin: 3px 5px;
  background-color: ${(props: iTagItemStyle) => props.itemBgColor};
  color: ${(props: iTagItemStyle) => props.itemColor};
  font-weight: ${(props: iTagItemStyle) => props.itemWeight};
  border-radius: 15px;
  transition: 0.1s linear;
  &:hover {
    opacity: 0.7;
  }
`;

// export const getStaticProps: GetStaticProps<ITagProps> = async () => {
//   const posts = getAllPosts(['title', 'date', 'description', 'slug', 'tags']);

//   const tags: ITag[] = [];

//   posts.forEach((post) => {
//     const tagArr = post.tags;

//     // tags배열 인자 검증
//     if (tagArr !== undefined && Array.isArray(tagArr)) {
//       tagArr.forEach((item) => {
//         let idx = 0;
//         // 기존 tags 배열에 tag가 있는지 검사
//         const filtered = tags.find((data, index) => {
//           idx = index;
//           return data.name === item;
//         });

//         // tag가 없으면 새로운 태그 오브젝트 추가
//         if (filtered === undefined) {
//           tags.push({
//             name: item,
//             cnt: 1,
//           });
//         } else {
//           // tag가 존재하면 기존 태그 오브젝트의 cnt 추가
//           tags[idx].cnt++;
//         }
//       });
//     }
//   });

//   // 태그 배열 정렬
//   tags.sort((a, b) => {
//     return b.cnt - a.cnt;
//   });

//   return {
//     props: {
//       tags: tags,
//     },
//   };
// };

export default Tags;
