import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import "./App.css";

// function App() {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   const handleIncrement = () => {
//     dispatch(increment());
//   };

//   const handleDecrement = () => {
//     dispatch(decrement());
//   };

//   return (
//     <>
//       <div className="card">
//         <h2>Count: {count}</h2>
//         <button class="increment-button" onClick={handleIncrement}>
//           Increase
//         </button>
//         <button class="decrement-button" onClick={handleDecrement}>
//           Decrease
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;

import React from 'react'

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
    <h1>Redux project 1</h1>
      <div className="card">
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>
          Increase
        </button>
        <button onClick={handleDecrement}>
          Decrease
        </button>
      </div>
    </>
  )
}

export default App