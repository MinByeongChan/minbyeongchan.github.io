import { call, put } from '@redux-saga/core/effects';
import { getAxios, postAxios, putAxios } from '../api/customAxios';
import { CLOSE_MODAL } from './modal';

export const COMMENT = 'api/COMMENT';
export const COMMENT_SUCCESS = 'api/COMMENT_SUCCESS';
export const COMMENT_ERROR = 'api/COMMENT_ERROR';

export const SET_COMMENTS = 'comment/SET_COMMENTS';
export const RESET_COMMENTS = 'comment/RESET_COMMENTS';
export const SELECT_COMMENT = 'comment/SELECT_COMMENT';

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

export const setComments = (data: any) => ({
  type: SET_COMMENTS,
  payload: data,
});
export const resetComments = () => ({
  type: RESET_COMMENTS,
});
export const selectComment = (id: number) => ({
  type: SELECT_COMMENT,
  payload: id,
});

export function* reqCommentApi(action: any): any {
  const { url, payload } = action;

  if (url === '001') {
    yield getAllComment();
  } else if (url === '002') {
    yield createComment(payload);
  } else if (url === '003') {
    yield updateComment(payload);
  } else if (url === '004') {
    yield deleteComment(payload);
  } else {
    return null;
  }
}
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export function* getAllComment() {
  const req_data: ResponseGenerator = yield call(getAxios, '/BLGCMT/001');
  const { data } = req_data;

  if (req_data.status === 200) {
    yield put({ type: SET_COMMENTS, payload: data });
  } else {
    yield put({ type: RESET_COMMENTS });
  }
}

export function* createComment(param: any) {
  const req_data: ResponseGenerator = yield call(postAxios, '/BLGCMT/002', param);
  const { data } = req_data;

  if (req_data.status === 200) {
    if (data.rc === '1') {
      yield alert('작성 되었습니다');
      yield window.location.reload();
    }
  }
}

export function* updateComment(param: any) {
  const req_data: ResponseGenerator = yield call(putAxios, '/BLGCMT/003', param);
  const { data } = req_data;

  if (req_data.status === 200) {
    if (data.rc === '1') {
      yield alert('정상적으로 수정 되었습니다');
      yield put({ type: CLOSE_MODAL });
      yield getAllComment();
    } else {
      yield alert(data.msg);
    }
  }
}

export function* deleteComment(param: any) {
  const req_data: ResponseGenerator = yield call(postAxios, '/BLGCMT/004', param);
  const { data } = req_data;

  if (req_data.status === 200) {
    if (data.rc === '1') {
      yield alert('정상적으로 삭제 되었습니다');
      yield put({ type: CLOSE_MODAL });
      yield getAllComment();
    } else {
      yield alert(data.msg);
    }
  }
}

const initState = {
  list: [],
  selected: {},
};

const comments = (state = initState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, list: payload };
    case RESET_COMMENTS:
      return initState;
    case SELECT_COMMENT:
      const list = state.list;
      return {
        ...state,
        selected: list.find((data: any) => data.id === payload),
      };
    default:
      return state;
  }
};

export default comments;
