import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; // we using it as middleware
import rootReducer from "./reducers"; //all other reducers to be brought in

const initialState = {};
const middleware = [thunk];

//one single centralized store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
