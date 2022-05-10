import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "./actions";
import DecrementBtn from "./DecrementBtn";

function App() {
	const counter = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	return (
		<div className="App">
			counter: {counter}
			<button
				onClick={() => {
					dispatch(incrementAction);
				}}
			>
				increment
			</button>
			<DecrementBtn />
		</div>
	);
}

export default App;
