import { TextField } from "@mui/material";
import axios from "axios";
import "./App.css";
import { Fragment, useEffect, useState} from "react";


// https://www.mediawiki.org/w/api.php
function App() {
  const [tirm, setTirm] = useState("")
  const [result, setResult] = useState([])

  useEffect(() => {
    const search = async () => {
      // eslint-disable-next-line no-unused-vars
      const respond = await axios.get("https://www.mediawiki.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: tirm 
        }
      });
      setResult(respond.data.query.search);
    }
    if(tirm) {
      search();
    }
  })

  const FeachResult = result.map((ele) => {
    // eslint-disable-next-line react/jsx-key
    return (
      // eslint-disable-next-line react/jsx-key
      <tr key={ele.pageid}>
        {/* <td className="border">{ele.id}</td> */}
        <td dangerouslySetInnerHTML={{ __html: ele.title }} />
        <td dangerouslySetInnerHTML={{ __html: ele.snippet }} />
        {/* <td className="border">{ele.title}</td> */}
        {/* <td className="border">{ele.snippet}</td> */}
      </tr>
    );
  })



  return (
    <Fragment>
      <TextField
        onChange={(e) => {
          setTirm(e.target.value);
        }}
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
      <table className="border">
        <thead className="border">
          <tr>
            {/* <td className="border">id</td> */}
            <td className="border">Title</td>
            <td className="border">desc</td>
          </tr>
        </thead>
        <tbody>
        {FeachResult}
        </tbody>
      </table>
    </Fragment>
  );
}

export default App;
