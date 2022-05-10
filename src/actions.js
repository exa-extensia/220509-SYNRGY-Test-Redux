const incrementAction = {
	type: "increment-count",
};

const decrementAction = {
	type: "decrement-count",
};

const setCounterAction = (num) => ({
	type: "set-count",
	payload: num,
});

const addTodoAction = (content) => ({
	type: "add-todo",
	payload: content,
});

const delTodoAction = (content) => ({
	type: "del-todo",
	payload: content,
});

export {
	incrementAction,
	decrementAction,
	setCounterAction,
	addTodoAction,
	delTodoAction,
};
