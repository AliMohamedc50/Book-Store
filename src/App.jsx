import Card from "./Components/Card"
import './App.css'
import { useRef, useState } from "react";
import Filter from "./Components/Filter";

function App() {
  // eslint-disable-next-line no-unused-vars 
  const inoutEle = useRef ()
    const [cardToggle, setCardToggle] = useState(true);
    const [filterData , setFilterData] = useState(0)
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

    // const wrightconsole = () => {
    //   console.log(inoutEle.current.value);
    // }
    const clickFucos = () => {
      console.log(inoutEle.current.focus());
    }


    const filterName = (name) => {
      console.log(name);
      return setFilterData(name);
      
    }
    const filterHandler = () => {
        if (filterData.length > 0 ) {
          return state.filter(
            (ele) => ele.name.startsWith(filterData)
          );
        }
        return state;
    }
  return (
    <div>
      <h2>Boys Data</h2>
      <button
        onClick={() =>
          cardToggle ? setCardToggle(false) : setCardToggle(true)
        }
        className="px-10 py-2 bg-cyan-900 rounded-lg my-5 text-white"
      >
        {cardToggle ? "hide" : "show"}
      </button>
      <div>
        <button
          className="px-5 py-2 bg-cyan-900 rounded-lg my-5 text-white"
          onClick={clickFucos}
        >
          focus
        </button>
        <Filter filterName={filterName} />
      </div>
      <div className={cardToggle ? "block" : "hidden"}>
        <Card
          card={filterHandler()}
          deleteFunc={deleteFunc}
          // filterName={filterName}
          border="rgb(225 29 72);"
          background="rgb(15 118 110)"
        />
      </div>
    </div>
  );
}

export default App
