import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers } from "redux";

import * as reducers from "./app/redux/reducers";
import * as pokemon from "./app/redux/sagas";
import rootSaga from "./app/redux/sagas/pokemon";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={<div />}>
        <App />
      </React.Suspense>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
