import { createStore, combineReducers } from "redux";

import counterReducer from "./reducer";
import reducerToDo from "./reducerToDo";

const store = createStore(
	combineReducers({
		counter: counterReducer,
		todo: reducerToDo,
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
