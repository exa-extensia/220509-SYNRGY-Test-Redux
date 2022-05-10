import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrementAction, setCounterAction } from "./actions";

function DecrementBtn(props) {
	const [inputNum, setInputNum] = useState("");
	const handlerInputNum = (e) => {
		setInputNum(e.target.value);
	};
	const handlerForm = (e) => {
		e.preventDefault();
		console.log(inputNum);
		dispatch(setCounterAction(inputNum));
	};

	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() => {
					dispatch(decrementAction);
				}}
			>
				decrement
			</button>
			<form onSubmit={handlerForm}>
				<input onChange={handlerInputNum} />
				<button>Input Number</button>
			</form>
		</div>
	);
}

export default DecrementBtn;
