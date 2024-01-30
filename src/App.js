/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {

    const controlZeros = /[+\-/*]0{1,}$/;
    const controlPoints = /[+\-/*]|\d*\.\d*$/;

    if (result !== 'Error' && result !== '0') {
        //controlamos que al obtener el error NaN se modifique por el numero ingresado
        if (isNaN(result)) {
          setResult(e.target.name);
        }
        //controlamos que el final de la cadena sea un operador o un punto
        if (result.endsWith('+') || result.endsWith('/') || result.endsWith('*') || result.endsWith('-')) {
          
          if ((e.target.name !== '+') && (e.target.name !== '/') && (e.target.name !== '*')) {
            
            if (e.target.name === '-' && result.endsWith('-')) {
              // setResult(result.slice(0, -1) + e.target.name)
              setResult(result.concat(''));
            } else {
              setResult(result.concat(e.target.name));
            }
          } else {
            if ((e.target.name === '+') || (e.target.name === '/') || (e.target.name === '*') || (e.target.name === '.')) {
              setResult(result.slice(0, -1) + e.target.name)
            } else {
              if (e.target.name === '-') {
                setResult(result.concat(e.target.name))
              } else {
                setResult(result.concat(''))
              }
            }
          }
        } else{
          //controlamos que no se ingresen mas de un 0 como numero entre operaciones
          if (controlZeros.test(result) && e.target.classList.contains('numbers')){
            setResult(result.concat(''))
          } else{
            //controlamos que se ingrese solamente un punto por numero
            if (controlPoints.test(result) && e.target.name === '.') {
              setResult(result.concat(''));
            } else {

              if (result.endsWith('-') && (e.target.name === '-')) {
                setResult(result.concat(''));
              } else {
                setResult(result.concat(e.target.name));

                
              }
            }
          }
        }
        //manejo de errores y controlar que al principio solo se ingresen numeros o un signo -
      } else {
        //controlamos los 0 del inicio
      if ((e.target.name === '0')) {
        setResult('');
      } else {
        //controlamos que si ingresamos un operador al principio se calcule con el 0 que ya esta
      if ((e.target.name === '+') || (e.target.name === '/') || (e.target.name === '*') || (e.target.name === '-')) {
          setResult(result.concat(e.target.name));
      } else {

        //si aparece error o 0 al inicio simplemente modificamos por el numero elegido
        setResult(e.target.name);
      }
        
      }
    }
  }

  const Allclear = () => {
    setResult("");
  }

  const clear = () => {
    setResult(result.slice(0, -1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error");
    }
  }

  return (
    <div className="container bg-secondary p-5">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="0"
          aria-label="Amount (to the nearest dollar)"
          value={result}
          id='display'
        />
      </InputGroup>
      <div className="button row row-cols-4 gap-1">
        <Button variant="danger" className='col' onClick={Allclear} id="clear">AC</Button>
        <Button variant="danger" className='col' onClick={clear} id="clear">C</Button>
        <Button name="/" className='operators col' variant="info" onClick={handleClick} id="divide">/</Button>
        <Button name="7" className='numbers col' onClick={handleClick} id='seven'>7</Button>
        <Button name="8" className='numbers col' onClick={handleClick} id='eight'>8</Button>
        <Button name="9" className='numbers col' onClick={handleClick} id='nine'>9</Button>
        <Button name="*" className='operators col' variant="info" onClick={handleClick} id='multiply'>*</Button>
        <Button name="4" className='numbers col' onClick={handleClick} id='four'>4</Button>
        <Button name="5" className='numbers col' onClick={handleClick} id='five'>5</Button>
        <Button name="6" className='numbers col' onClick={handleClick} id='six'>6</Button>
        <Button name="-" className='operators col' variant="info" onClick={handleClick} id='subtract'>-</Button>
        <Button name="1" className='numbers col' onClick={handleClick} id='one'>1</Button>
        <Button name="2" className='numbers col' onClick={handleClick} id='two'>2</Button>
        <Button name="3" className='numbers col' onClick={handleClick} id='three'>3</Button>
        <Button name="+" className='operators col' variant="info" onClick={handleClick} id='add'>+</Button>
        <Button name="0" className='numbers col' onClick={handleClick} id='zero'>0</Button>
        <Button name="." className='col' onClick={handleClick} id='decimal'>.</Button>
        <Button variant="primary" className='col' onClick={calculate} id="equals">=</Button>
      </div>
    </div>
  );
}

export default App;
