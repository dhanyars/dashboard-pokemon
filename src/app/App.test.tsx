import React from "react";
import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import * as reducers from "../app/redux/reducers";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import App from "./App";

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Sort by/i);
  expect(linkElement).toBeInTheDocument();
});
