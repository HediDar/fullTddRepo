import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import GiftRecuder from "./reducers/giftsReducers";

function configureStore(state) {
  return createStore(
    GiftRecuder,
    applyMiddleware(promiseMiddleware),
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default configureStore;
