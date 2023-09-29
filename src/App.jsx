/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Fragment } from "react";

function App() {
  const dispach = useDispatch();

  const handelAllStore = useSelector((state) => state )
  
  
  
  const counterOpration = (setType, setPayload) => {
    dispach({ type: setType, payload: setPayload });
  }
    const toggleCounter = () => {
      const action = { type: "toggleCounter" };
      dispach(action);
    }
  
  
  // const increase = () => {
  //   dispach({ type: "increase", payload: 5});
  // };
  // const decrease = () => {
  //   dispach({ type: "decrease", payload: 3 });
  // };




  return (
    <Fragment>
      {handelAllStore.showCount && (
        <>
          <div>
            Contauner: <span id="counter">{handelAllStore.count}</span>
          </div>
          <button
            onClick={() => counterOpration("increase", 5)}
            className="bg-teal-500 text-white px-10 py-1 rounded-xl mx-1"
          >
            +
          </button>
          <button
            onClick={() => counterOpration("decrease", 2)}
            className="bg-teal-500 text-white px-10 py-1 rounded-xl mx-1"
          >
            -
          </button>
          <br />
        </>
      )}
      <button
        onClick={toggleCounter}
        className="my-3 bg-teal-500 text-white px-5 py-1 rounded-xl mx-1"
      >
        Show/Hide Counter Numper
      </button>
    </Fragment>
  );
}

export default App;
