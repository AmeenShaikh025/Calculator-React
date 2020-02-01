import { combineReducers } from "redux";

import operation from "./operationReducer";

export default combineReducers({
  operation: operation
});
