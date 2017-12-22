import { combineReducers } from "redux";
import LinksReducer from "./reducer_links";

const rootReducer = combineReducers({
  links: LinksReducer
});

export default rootReducer;