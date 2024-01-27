import './App.css';
import { useState } from 'react';

function App() {

  const [valueDisplay, setvalueDisplay] = useState("0");

  function handleClear() {
    setvalueDisplay("0");
  }

  function handleNumbers(e) {
    if (valueDisplay === ("0")) {
      setvalueDisplay((e.target.value))
    } else {
      setvalueDisplay(valueDisplay + e.target.value)

    }
  }



  return (
    <div className="container row">
      <input type="text" className="calculator-screen z-depth-1" value={valueDisplay} disabled id='display'/>
      <div className="calculator-keys">
          <button type="button" className="operator btn btn-info" value="+" id='add'>+</button>
          <button type="button" className="operator btn btn-info" value="-" id='subtract'>-</button>
          <button type="button" className="operator btn btn-info" value="*" id='multiply'>&times;</button>
          <button type="button" className="operator btn btn-info" value="/" id='divide'>&divide;</button>
          <button type="button" value="7" className="btn btn-light waves-effect" id='seven' onClick={handleNumbers}>7</button>
          <button type="button" value="8" className="btn btn-light waves-effect" id='eight' onClick={handleNumbers}>8</button>
          <button type="button" value="9" className="btn btn-light waves-effect" id='nine' onClick={handleNumbers}>9</button>
          <button type="button" value="4" className="btn btn-light waves-effect" id='four' onClick={handleNumbers}>4</button>
          <button type="button" value="5" className="btn btn-light waves-effect" id='five' onClick={handleNumbers}>5</button>
          <button type="button" value="6" className="btn btn-light waves-effect" id='six' onClick={handleNumbers}>6</button>
          <button type="button" value="1" className="btn btn-light waves-effect" id='one' onClick={handleNumbers}>1</button>
          <button type="button" value="2" className="btn btn-light waves-effect" id='two' onClick={handleNumbers}>2</button>
          <button type="button" value="3" className="btn btn-light waves-effect" id='three' onClick={handleNumbers}>3</button>
          <button type="button" value="0" className="btn btn-light waves-effect" id='zero' onClick={handleNumbers}>0</button>
          <button type="button" className="decimal function btn btn-secondary" value="." id='decimal'>.</button>
          <button type="button" className="all-clear function btn btn-danger btn-sm" value="clear" id='clear' onClick={handleClear}>AC</button>
          <button type="button" className="equal-sign operator btn btn-default" value="=" id='equal'>=</button>
      </div>

    </div>   
  );
}

export default App;
