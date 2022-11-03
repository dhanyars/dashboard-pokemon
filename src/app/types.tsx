import { combineReducers } from "redux";
import * as reducers from "./redux/reducers";

const rootReducer = combineReducers(reducers);

export type AppState = Unpack<typeof rootReducer> & { launchDarkly: string[] };

export type Unpack<T> = T extends (...args: any[]) => Promise<infer U>
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T;
