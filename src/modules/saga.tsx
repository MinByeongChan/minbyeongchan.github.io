import { takeEvery } from '@redux-saga/core/effects';
import { createPromiseSaga, handleAsyncActions, reducerUtils } from '../lib/asyncUtil';
import { COMMENT_ERROR, COMMENT, COMMENT_SUCCESS, reqCommentApi } from './comment';

// 액션
export const RESET_DATA = 'api/RESET_DATA';

// 액션 함수정의
export const resetData = () => ({
  type: RESET_DATA,
});

const apiCommentSaga = createPromiseSaga(COMMENT, reqCommentApi);

export function* fetchSaga() {
  yield takeEvery(COMMENT, apiCommentSaga);
}
export interface iInitState {
  [key: string]: any;
}
const initState: iInitState = {
  comment: reducerUtils.initial,
};

export default function fetchData(state = initState, action: any) {
  switch (action.type) {
    case COMMENT:
    case COMMENT_SUCCESS:
    case COMMENT_ERROR:
      return handleAsyncActions(COMMENT, 'comment', true)(state, action);
    case RESET_DATA:
      return initState;
    default:
      return state;
  }
}
