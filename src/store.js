import { createStore, combineReducers } from "redux";

import reducerCounter from "./reducers/reducerCounter";
import reducerToDo from "./reducers/reducerToDo";

const store = createStore(
	combineReducers({
		counter: reducerCounter,
		newTodo: reducerToDo,
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
