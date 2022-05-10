const initialState = {
	todo: [],
};

export default function reducerToDo(state = initialState, action) {
	switch (action.type) {
		case "add-todo":
			return {
				...state,
				todo: [...state.todo, action.payload],
			};
		case "del-todo":
			return {
				...state,
				todo: [action.payload],
			};
		default:
			return state;
	}
}
