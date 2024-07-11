// import { invoke } from "@tauri-apps/api/tauri";
import { useRef, useState, } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)
  const [isAdvHidden, setAdvHidden] = useState(false);

  const handleInput = (btmValue: string) => {
    setInput(input + btmValue);
  };
  const clearAllInput = () => {
    setInput("");
  }
  const deleteOneChar = () => {
    setInput(input.slice(0, input.length - 1));
  }

  const checkInput = (inp: string) => {
    inp = inp.replaceAll("×", "*");
    inp = inp.replaceAll("÷", "/");
    inp = inp.replaceAll("^", "**");
    inp = inp.replaceAll("√", "Math.sqrt");
    inp = inp.replaceAll("cos", "Math.cos");
    inp = inp.replaceAll("sin", "Math.sin");
    inp = inp.replaceAll("tg", "Math.tan");
    inp = inp.replaceAll("ln", "Math.log");
    inp = inp.replaceAll("π", "Math.PI");
    inp = inp.replaceAll("e", "Math.E");
    return inp;
  }

  const calculateInput = () => {
    try {
      let resultInp: string = checkInput(input);
      resultInp = eval(resultInp).toString();
      setInput(resultInp);
    } catch (error) {
      setInput("Error");
    }
  }

  const changeMode = () => {
    setAdvHidden(!isAdvHidden);
  }
  return (
    <>
      <div className='main'>
        <div className={`calc-grid ${isAdvHidden ? 'advNoHid' : 'advHid'}`}>
          <input
            className="input-field"
            value={input}
            readOnly
            ref={inputRef}
          />
          <button onClick={() => handleInput("%")}>%</button>
          <button onClick={() => handleInput("÷")}>÷</button>
          <button onClick={() => handleInput("×")}>×</button>
          <button onClick={() => handleInput("-")}>-</button>
          <button onClick={() => deleteOneChar()}>DEL</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("7")}>7</button>
          <button id="plusBtn" onClick={() => handleInput("+")}>+</button>
          <button onClick={() => clearAllInput()}>AC</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("(")}>(</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("1")}>1</button>
          <button id="equal" onClick={() => calculateInput()}>=</button>
          <button onClick={() => handleInput(")")}>)</button>
          <button id="zeroBtn" onClick={() => handleInput("0")}>0</button>
          <button onClick={() => handleInput(".")}>.</button>
          <button onClick={() => handleInput("+/-")}>+/-</button>
          <button id='advMode-btn' onClick={changeMode}>Adv</button>
        </div >
        <div className={`advFunc-${isAdvHidden ? 'flex' : 'hidden'}`}>
          {/* <div className='advFuncs-flex' style={{ display: isAdvHidden ? 'none' : 'flex' }}> */}
          <button onClick={() => handleInput("^")}>^</button>
          <button onClick={() => handleInput("√(")}>√</button>
          <button onClick={() => handleInput("sin(")}>sin</button>
          <button onClick={() => handleInput("cos(")}>cos</button>
          <button onClick={() => handleInput("π")}>π</button>
          <button onClick={() => handleInput("e")}>e</button>
          <button onClick={() => handleInput("ln(")}>ln</button>
          <button onClick={() => handleInput("tg(")}>tg</button>
        </div>
      </div>
    </>
  )
}

export default App
