import "./App.css";
import { Fragment} from "react";
import Header from "./Components/Header";
import AddForm from "./Components/AddForm";
import Bookcontainer from "./Components/Book/bookcontainer";
// counterAuth

function App() {
  return (
    <Fragment>
      <Header />
      <div className="holdContainer" >
      <AddForm />
      <Bookcontainer />
      </div>
    </Fragment>
  );
}

export default App;
