import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import Seconds from "./secondes/Seconds";

function App() {

  const [minutes ,setminutes]=useState(0);
  const increase=()=>{
    if (minutes<5) {
      setminutes(minutes + 1);
    }
  };
  const decres=()=>{
    if (minutes>0) {
      setminutes(minutes - 1);
    }
  }

  return (
    <div className="container mt-5">
        <div className="row">
            <button className="btn btn-dark p-3" type="button" onClick={decres}>
                -
            </button>

        </div>

        <div className="row mt-5">
            <span>{minutes} minets</span>

        </div>

        <div className="row mt-5">

            <button className="btn btn-dark p-3"  type="button" onClick={increase}>
                +
            </button>
        </div>

        <div className="row mt-5">
            {minutes >0 ?<Seconds minutes={minutes} setminutes={setminutes} />:null}

        </div>



    </div>
  );
}

export default App;
