import { PostItems } from '../utils/Content';
import { isEmpty } from '../utils/Utility';

export interface IReducerPost {
  postList: PostItems[];
  searchList: PostItems[];
}

// 액션 정의
export const SET_POSTS = 'posts/SET_POSTS';
export const SEARCH_POSTS = 'posts/SEARCH_POSTS';
export const RESET_POSTS = 'posts/RESET_POSTS';

// 액션 함수 정의
export const setPosts = (data: any[]) => ({
  type: SET_POSTS,
  payload: data,
});
export const searchPosts = (data: string) => ({
  type: SEARCH_POSTS,
  payload: data,
});
export const resetPosts = () => ({
  type: SET_POSTS,
});

const initState: IReducerPost = {
  postList: [],
  searchList: [],
};

const posts = (state = initState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        postList: payload,
      };
    case SEARCH_POSTS:
      let inputVal = payload;

      // 문자열 검증
      if (!textVerify(inputVal)) {
        return { ...state };
      }

      if (inputVal.length > 0) {
        const tmp = state.postList.filter((data) => {
          const title = data.title.toString();
          const desc = !isEmpty(data.description) ? data.description : '';
          const tags = !isEmpty(data.tags) ? data.tags.toString() : '';

          return (
            title.match(new RegExp(inputVal, 'i')) !== null ||
            desc.match(new RegExp(inputVal, 'i')) !== null ||
            tags.match(new RegExp(inputVal, 'i')) !== null
          );
        });

        return { ...state, searchList: tmp };
      } else {
        return { ...state, searchList: initState.searchList };
      }
    case RESET_POSTS:
      return state;
    default:
      return state;
  }
};

// 문자열 검증 함수
const textVerify = (input: any) => {
  for (let i in input) {
    let ascii = input[i].charCodeAt(0);
    console.log('ascii', ascii);
    if (ascii >= 48 && ascii <= 57) {
      continue;
    } else if (ascii >= 65 && ascii <= 90) {
      continue;
    } else if (ascii >= 97 && ascii <= 122) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

export default posts;
