import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "./actions";
import DecrementBtn from "./components/DecrementBtn";
import ToDo from "./components/ToDo";

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
			<ToDo />
		</div>
	);
}

export default App;
