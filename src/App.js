import './App.css';
import { useState } from 'react';

function App() {

  const [valueDisplay, setValueDisplay] = useState(0);
  const [valueResultado, setValueResultado] = useState(0);
  const [valueCurrent, setValueCurrent] = useState(0);
  const [operator, setOperator] = useState("");
  const [prevOperator, setPrevOperator] = useState("");


  function handleClear() {
    setValueCurrent(0);
    setValueDisplay(0);
    setValueResultado(0);
  }

  function handleNumbers(e) {
    if (valueDisplay === 0 || isNaN(valueDisplay)) {
      setValueDisplay((e.target.value));
    } else {
      setValueDisplay(`${valueDisplay}${e.target.value}`);
    }
  }

  function operation(e) {
    console.log(valueDisplay);
    console.log(valueCurrent);
    setOperator(e.target.id);
    setPrevOperator(setOperator(prev => {return prev}))
    switch (prevOperator) {
    case "add":
      setValueResultado(setValueCurrent(prevState => {return prevState+valueCurrent}));
      break;
    case "subtract":
      setValueResultado(setValueCurrent(prevState => {return prevState-valueCurrent}));
      break;
    case "multiply":
      setValueResultado(setValueCurrent(prevState => {return prevState*valueCurrent}));
      break;
    case "divide":
      setValueResultado(setValueCurrent(prevState => {return prevState/valueCurrent}));
      break;
    default:
      break;
    }
    setValueCurrent(valueDisplay);
    setValueDisplay(0);
  }


  function equal() {
    let resultado;
    switch (operator) {
      case "add":
        resultado = (parseFloat(valueCurrent) + parseFloat(valueDisplay));
        setValueResultado(resultado);
        setValueDisplay(0);

        setOperator("");
        setPrevOperator(setOperator(prev => {return prev}))
        break;
      case "subtract":
        resultado = (parseFloat(valueCurrent)-parseFloat(valueDisplay));
        setValueResultado(resultado);
        setValueDisplay(0);
        setOperator("");
        break;
      case "multiply":
        resultado = (parseFloat(valueCurrent)*parseFloat(valueDisplay));
        setValueResultado(resultado);
        setValueDisplay(0);
        setOperator("");
        break;
      case "divide":
        resultado = (parseFloat(valueCurrent)/parseFloat(valueDisplay));
        setValueResultado(resultado);
        setValueDisplay(0);
        setOperator("");
        break;
      default:
        break;
    }
  }

  return (
    <div className="container row">
      <label htmlFor="display">{valueResultado}
        <input type="text" className="calculator-screen z-depth-1" value={valueDisplay} disabled id='display'/>
      </label>
      <div className="calculator-keys">
          <button type="button" className="operator btn btn-info" value="+" id='add' onClick={operation}>+</button>
          <button type="button" className="operator btn btn-info" value="-" id='subtract' onClick={operation}>-</button>
          <button type="button" className="operator btn btn-info" value="*" id='multiply' onClick={operation}>&times;</button>
          <button type="button" className="operator btn btn-info" value="/" id='divide' onClick={operation}>&divide;</button>
          <button type="button" value="7" className="btn btn-light" id='seven' onClick={handleNumbers}>7</button>
          <button type="button" value="8" className="btn btn-light" id='eight' onClick={handleNumbers}>8</button>
          <button type="button" value="9" className="btn btn-light" id='nine' onClick={handleNumbers}>9</button>
          <button type="button" value="4" className="btn btn-light" id='four' onClick={handleNumbers}>4</button>
          <button type="button" value="5" className="btn btn-light" id='five' onClick={handleNumbers}>5</button>
          <button type="button" value="6" className="btn btn-light" id='six' onClick={handleNumbers}>6</button>
          <button type="button" value="1" className="btn btn-light" id='one' onClick={handleNumbers}>1</button>
          <button type="button" value="2" className="btn btn-light" id='two' onClick={handleNumbers}>2</button>
          <button type="button" value="3" className="btn btn-light" id='three' onClick={handleNumbers}>3</button>
          <button type="button" value="0" className="btn btn-light" id='zero' onClick={handleNumbers}>0</button>
          <button type="button" className="decimal function btn btn-secondary" value="." id='decimal' onClick={handleNumbers}>.</button>
          <button type="button" className="all-clear function btn btn-danger btn-sm" value="clear" id='clear' onClick={handleClear}>AC</button>
          <button type="button" className="equal-sign operator btn btn-default" value="=" id='equal' onClick={equal}>=</button>
      </div>

    </div>   
  );
}

export default App;
