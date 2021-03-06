const initialState = {
	count: 0,
};

export default function counterReducer(state = initialState, action) {
	switch (action.type) {
		case "increment-count":
			return {
				...state,
				count: state.count + 1,
			};
		case "decrement-count":
			return {
				...state,
				count: state.count - 1,
			};
		case "set-count":
			return {
				...state,
				count: action.payload * 1,
			};
		default:
			return state;
	}
}
