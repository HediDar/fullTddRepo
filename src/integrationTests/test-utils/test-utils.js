import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../../reducers/giftsReducers";
import promiseMiddleware from "redux-promise-middleware";
import { Provider } from "react-redux";

const render = (ui, initialStore = {}, options = {}) => {
  const store = createStore(
    rootReducer,
    initialStore,
    applyMiddleware(promiseMiddleware)
  );
  const Providers = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper: Providers, ...options });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
