import { connect } from "react-redux";
import { incrementAction } from "./actions";
import DecrementBtn from "./DecrementBtn";

function App(props) {
	return (
		<div className="App">
			counter: {props.count}
			<button
				onClick={() => {
					props.incrementCount();
				}}
			>
				increment
			</button>
			{/* <button
				onClick={() => {
					props.decrementCount();
				}}
			>
				decrement
			</button> */}
			<DecrementBtn />
		</div>
	);
}

const mapStateToProps = (state) => ({
	count: state.count,
});

const mapDispatchToProps = (dispatch, state) => ({
	incrementCount: () => {
		dispatch(incrementAction);
	},
	// decrementCount: () => {
	// 	dispatch(decrementAction);
	// },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
