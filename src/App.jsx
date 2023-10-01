/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Fragment, useCallback, useEffect } from "react";
import { counterAction } from "./Store/CounterSlice"; 
import { AuthAction } from "./Store/AuthSlice";

// counterAuth

function App() {

  const { increase, decrease } = counterAction;
  const { toggleCounter } = AuthAction;
  const dispach = useDispatch();
  const handelAllStore = useSelector((state) => {
    return state 
  })
  

  
  const test = useCallback(() => {
    dispach(increase(5));
  }, [dispach]);

  useEffect(() => {
    test();
  }, [test]);
  
  // const counterOpration = (setType, setPayload) => {
  //   dispach({ type: setType, payload: setPayload });
  // }
  
  // const toggleCounter = () => {
  //   const action = { type: "toggleCounter" };
  //   dispach(action);
  // }
  
  // const increase = () => {
  //   dispach({ type: "increase", payload: 5});
  // };
  // const decrease = () => {
  //   dispach({ type: "decrease", payload: 3 });
  // };


// const teeeee = true;

  return (
    <Fragment>
      {/* {handelAllStore.showCount && ( */}
      {handelAllStore.auth.toggleCounter && (
        <>
          <div>
            Contauner: <span id="counter">{handelAllStore.counter.count}</span>
          </div>
          <button
            onClick={() => dispach(increase(5))}
            className="bg-teal-500 text-white px-10 py-1 rounded-xl mx-1"
          >
            +
          </button>
          <button
            onClick={() => dispach(decrease(2))}
            className="bg-teal-500 text-white px-10 py-1 rounded-xl mx-1"
          >
            -
          </button>
          <br />
        </>
      )}
      <button
        onClick={() => dispach(toggleCounter())}
        className="my-3 bg-teal-500 text-white px-5 py-1 rounded-xl mx-1"
      >
        Show/Hide Counter Numper
      </button>
    </Fragment>
  );
}

export default App;
