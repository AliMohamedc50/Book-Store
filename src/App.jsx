import Card from "./Components/Card"
import './App.css'
import { useState } from "react";

function App() {
  const [cardToggle, setCardToggle] = useState(true);
     // eslint-disable-next-line no-unused-vars
     const [state, setState] = useState(
    [
      {
      name: "castillo",
      age: "20",
      email: "castillo@gmail.com"},
    {
      name: "ali",
      age: "80",
      email: "ali@gmail.com"},
    {
      name: "mohamed",
      age: "28",
      email: "mohamed@gmail.com"}
    ]
    )
 
    const deleteFunc = (e, ele) =>{
      // const deletele = state.filter((eleF, i) => i !== ele);
      setState((preveState) => {
        return preveState.filter((eleF, i) => i !== ele);
      });

    }
  return (
    <div>
      <h2>Boys Data</h2>
      <button
        onClick={() =>
          cardToggle ? setCardToggle(false) : setCardToggle(true)
        }
        className="px-5 py-2 bg-cyan-900 rounded-lg mt-5 text-white"
      >
        {cardToggle ? "hide" : "show"}
      </button>
      <div className={cardToggle ? "block" : "hidden"  }>
        <Card
          card={state}
          deleteFunc={deleteFunc}
          border="rgb(225 29 72);"
          background="rgb(15 118 110)"
        />
      </div>
    </div>
  );
}

export default App
