import "./App.css";
import { Fragment, useEffect, useRef, useState } from "react";

function App() {

  const datainp = useRef()
  const [data, setData] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    if (phone) {
      console.log(phone)
    }
  }, [phone]);
  const printData = () => {
    const newData = datainp.current.value
    setData(newData);
    console.log(data)
  }
  return (
    <Fragment>
      <input
        ref={datainp}
        value={data}
        onChange={printData}
        placeholder="For test"
        className="bg-green-300 placeholder:text-gray-700 px-4 py-2 mx-2 border border-gray-950 rounded-md"
        type="text"
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        placeholder="For test"
        className="bg-green-300 placeholder:text-gray-700 px-4 py-2 mx-2 border border-gray-950 rounded-md"
        type="text"
      />
      <p>{data}</p>
    </Fragment>
  );
}

export default App;
