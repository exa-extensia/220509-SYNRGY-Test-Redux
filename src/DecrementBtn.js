import { useState } from "react";
import { connect } from "react-redux";
import { decrementAction, setCounterAction } from "./actions";

function DecrementBtn(props) {
	const [inputNum, setInputNum] = useState("");
	const handlerInputNum = (e) => {
		setInputNum(e.target.value);
	};
	const handlerForm = (e) => {
		e.preventDefault();
		console.log(inputNum);
		props.set(inputNum);
	};

	return (
		<div>
			<button
				onClick={() => {
					props.decrementCount();
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

const mapStateToProps = (state) => ({
	count: state.count,
});

const mapDispatchToProps = (dispatch, state) => ({
	decrementCount: () => {
		dispatch(decrementAction);
	},
	set: (num) => {
		dispatch(setCounterAction(num));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(DecrementBtn);
