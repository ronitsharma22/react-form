import { combineReducers } from "redux";

import { formDataArr, savedFormDataRes } from "./user.reducer";

const rootReducer = combineReducers({
  formDataArr,
  savedFormDataRes,
});

export default rootReducer;
