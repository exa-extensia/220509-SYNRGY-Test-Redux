import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../actions";

function ToDo() {
	const [inputTodo, setInputTodo] = useState("");
	const dispatch = useDispatch();
	const itemTodo = useSelector((state) => state.newTodo.todo);

	const handlerForm = (e) => {
		e.preventDefault();
		console.log(inputTodo);
		dispatch(addTodoAction(inputTodo));
		setInputTodo("");
	};

	const handlerInput = (e) => {
		setInputTodo(e.target.value);
	};

	return (
		<div>
			<h1>To Do List</h1>
			<div>
				{itemTodo.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</div>
			<form onSubmit={handlerForm}>
				<input onChange={handlerInput} />
				<button type="submit">Input To Do</button>
			</form>
		</div>
	);
}

export default ToDo;
