// 액션 정의
export const SET_POSTS = "posts/SET_POSTS";
export const RESET_POSTS = "posts/RESET_POSTS";

// 액션 함수 정의
export const setPosts = (data: any[]) => ({
    type: SET_POSTS,
    payload: data
})
export const resetPosts = () => ({
    type: SET_POSTS,
})

const initState = {
    posts: [],
};

const posts = (state = initState, action: any) => {
    const {type, payload} = action;
    switch(type){
        case SET_POSTS:
            return payload;
        case RESET_POSTS:
            return state;
        default: 
           return state; 
    }
}

export default posts; 