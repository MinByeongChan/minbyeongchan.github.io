import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from "./reducers";

export const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  composeWithDevTools(
    applyMiddleware(
      logger
    )
  )
);

export default preloadedState => {
  return createStore(rootReducer, preloadedState, composeWithDevTools(
    applyMiddleware(
      logger
    )
  ));
};