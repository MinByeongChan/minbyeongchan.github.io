import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comment';
import fetchData from './saga';
import modal from './modal';
import { fetchSaga } from './saga';

const rootReducer = combineReducers({
  posts,
  comments,
  modal,
  fetchData,
});

export function* rootSaga() {
  yield all([fetchSaga()]);
}
export default rootReducer;
