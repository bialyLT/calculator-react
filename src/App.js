/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const calculate = () => {
    try {

      


      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error");
    }
  }

  return (
    <div className="container">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="0"
          aria-label="Amount (to the nearest dollar)"
          value={result}
        />
      </InputGroup>
      <div className="button">
        <Button variant="danger" onClick={clear}>Clear</Button>
        <Button name="/" variant="info" onClick={handleClick}>/</Button>
        <Button name="7" onClick={handleClick}>7</Button>
        <Button name="8" onClick={handleClick}>8</Button>
        <Button name="9" onClick={handleClick}>9</Button>
        <Button name="*" variant="info" onClick={handleClick}>*</Button>
        <Button name="4" onClick={handleClick}>4</Button>
        <Button name="5" onClick={handleClick}>5</Button>
        <Button name="6" onClick={handleClick}>6</Button>
        <Button name="-" variant="info" onClick={handleClick}>-</Button>
        <Button name="1" onClick={handleClick}>1</Button>
        <Button name="2" onClick={handleClick}>2</Button>
        <Button name="3" onClick={handleClick}>3</Button>
        <Button name="+" variant="info" onClick={handleClick}>+</Button>
        <Button name="0" onClick={handleClick}>0</Button>
        <Button name="." onClick={handleClick}>.</Button>
        <Button variant="primary" onClick={calculate}>=</Button>
      </div>
    </div>
  );
}

export default App;
