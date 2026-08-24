import './App.css'
import {useState} from "react";

function App() {
const [counter, setCounter] = useState(0);
  //let counter  = 15;
  const addvalue = ()=>{
    setCounter(counter + 1);
    // counter++;
    // console.log(counter);
  }
  const removevalue = ()=>{
    setCounter(counter - 1);
  }
  return (
      <>
        <br/><br/><br/><br/>
        <h1>react course with ansh {counter}</h1>
        <br/><br/><br/><br/>
        <h2>counter value: {counter}</h2>
        <br/><br/>
        <button
            onClick={addvalue}
        >add value
        </button><br/><br/>

        <button
        onClick={removevalue}
        >remove value</button>
        <br/><br/>
        <p>footer : {counter}</p>
      </>
  )
}

export default App
