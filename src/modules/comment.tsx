import { deleteAxios, getAxios, putAxios } from '../api/customAxios';

export const COMMENT = 'api/COMMENT';
export const COMMENT_SUCCESS = 'api/COMMENT_SUCCESS';
export const COMMENT_ERROR = 'api/COMMENT_ERROR';

export const GET_COMMENT = 'api/GET_COMMENT';
export const GET_COMMENT_SUCCESS = 'api/GET_COMMENT_SUCCESS';
export const GET_COMMENT_ERROR = 'api/GET_COMMENT_ERROR';
export const ADD_COMMENT = 'api/ADD_COMMENT';
export const ADD_COMMENT_SUCCESS = 'api/ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_ERROR = 'api/ADD_COMMENT_ERROR';
export const PUT_COMMENT = 'api/PUT_COMMENT';
export const PUT_COMMENT_SUCCESS = 'api/PUT_COMMENT_SUCCESS';
export const PUT_COMMENT_ERROR = 'api/PUT_COMMENT_ERROR';
export const DELETE_COMMENT = 'api/DELETE_COMMENT';
export const DELETE_COMMENT_SUCCESS = 'api/DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_ERROR = 'api/DELETE_COMMENT_ERROR';

const BASE_URL = '/BLGCMT';

export const commentStart = (header: any) => ({
  type: COMMENT,
  payload: header,
});
export const commentSuccess = (data: any) => ({
  type: COMMENT_SUCCESS,
  payload: data,
});
export const commentError = (error: any) => ({
  type: COMMENT_ERROR,
  payload: error,
});

// export const getCommentStart = (header: any) => ({
//   type: GET_COMMENT,
//   payload: header,
// });
// export const addCommentStart = (header: any) => ({
//   type: ADD_COMMENT,
//   payload: header,
// });
// export const putCommentStart = (header: any) => ({
//   type: PUT_COMMENT,
//   payload: header,
// });
// export const deleteCommentStart = (header: any) => ({
//   type: DELETE_COMMENT,
//   payload: header,
// });
// export const getCommentSuccess = (data: any) => ({
//   type: GET_COMMENT_SUCCESS,
//   payload: data,
// });
// export const getCommentError = (error: any) => ({
//   type: GET_COMMENT_ERROR,
//   payload: error,
// });

export function* getAllComment() {
  return getAxios(BASE_URL + '/001');
}

export const createComment = (data: any) => {
  return putAxios(BASE_URL + '/002', data);
};

export const updateComment = (id: String, data: any) => {
  return putAxios(BASE_URL + '/003' + id, data);
};

export const deleteComment = (id: String) => {
  return deleteAxios(BASE_URL + '/004' + id);
};
