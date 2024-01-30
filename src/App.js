/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {

    const controlZeros = /[+\-/*]0{2,}[+\-/*]/;

    if (result !== 'Error' && result !== '0') {
        if (isNaN(result)) {
          setResult(e.target.name);
        }
        
        if (result.endsWith('+') || result.endsWith('-') || result.endsWith('/') || result.endsWith('*') || result.endsWith('.')) {
          
          if ((e.target.name !== '+') && (e.target.name !== '/') && (e.target.name !== '*') && (e.target.name !== '.')) {
            
            if (result.endsWith('-') && (e.target.name === '-')) {
              setResult(result.concat(''));
            } else {
              setResult(result.concat(e.target.name));
            }
          } else {
            setResult(result.concat(''))
          }
        } else{
          
          setResult(result.concat(e.target.name));
        }
        //manejo de errores y controlar que al principio solo se ingresen numeros o un signo -
      } else {
        //controlamos los 0 del inicio
      if ((e.target.name === '0')) {
        setResult('');
      } else {
      if ((e.target.name === '+') || (e.target.name === '/') || (e.target.name === '*') || (e.target.name === '-')) {
          setResult(result.concat(e.target.name));
      } else {

        //si aparece error o 0 al inicio simplemente modificamos por el numero elegido
        setResult(e.target.name);
      }
        
      }
    }
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
          id='display'
        />
      </InputGroup>
      <div className="button">
        <Button variant="danger" onClick={clear} id="clear">Clear</Button>
        <Button name="/" variant="info" onClick={handleClick} id="divide">/</Button>
        <Button name="7" onClick={handleClick} id='seven'>7</Button>
        <Button name="8" onClick={handleClick} id='eight'>8</Button>
        <Button name="9" onClick={handleClick} id='nine'>9</Button>
        <Button name="*" variant="info" onClick={handleClick} id='multiply'>*</Button>
        <Button name="4" onClick={handleClick} id='four'>4</Button>
        <Button name="5" onClick={handleClick} id='five'>5</Button>
        <Button name="6" onClick={handleClick} id='six'>6</Button>
        <Button name="-" variant="info" onClick={handleClick} id='subtract'>-</Button>
        <Button name="1" onClick={handleClick} id='one'>1</Button>
        <Button name="2" onClick={handleClick} id='two'>2</Button>
        <Button name="3" onClick={handleClick} id='three'>3</Button>
        <Button name="+" variant="info" onClick={handleClick} id='add'>+</Button>
        <Button name="0" onClick={handleClick} id='zero'>0</Button>
        <Button name="." onClick={handleClick} id='decimal'>.</Button>
        <Button variant="primary" onClick={calculate} id="equals">=</Button>
      </div>
    </div>
  );
}

export default App;
