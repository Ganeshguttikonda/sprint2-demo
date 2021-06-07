import { combineReducers } from "redux";
import { createStore } from "redux";

import { UserReducer } from "./UserReducer";

const rootReducer = combineReducers({
  user: UserReducer,
});

const store = createStore(rootReducer);
export { store };
