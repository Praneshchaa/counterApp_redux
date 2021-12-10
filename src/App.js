import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/actions";
import { decrement } from "./actions/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
}

export default App;
