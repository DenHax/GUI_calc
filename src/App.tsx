// import { invoke } from "@tauri-apps/api/tauri";
import { useRef, useState, } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInput = (btmValue: string) => {
    setInput(input + btmValue);
  };
  const clearAllInput = () => {
    setInput("");
  }
  const deleteOneChar = () => {
    setInput(input.slice(0, input.length - 1));
  }

  const checkInput = () => {
    input.replace("^", "**");
    input.replace("√", "Math.sqrt");
  }

  const calculateInput = () => {
    try {
      checkInput();
      let result: string = eval(input).toFixed(16).toString();
      setInput(result);
    } catch (error) {
      setInput("Error");
    }
  }

  const changeMode = (hidElem: string) => {
    let elem = document.getElementById(hidElem);
    if (!elem) return;
    const isVisibly = elem.style.display;
    if (isVisibly !== "none") {
      elem.style.display = "flex";
    }
    else {
      elem.style.display = "none";
    }
  }

  // const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
  //   const { key } = event;
  //   if (!inputRef.current || document.activeElement !== inputRef.current) {
  //     if (key.match(/[0-9+\-*/(),=]|Backspace|Enter/)) {
  //       event.preventDefault();
  //       if (key === ("Enter" || "=")) {
  //         calculateInput();
  //       } else if (key === "Backspace") {
  //         deleteOneChar();
  //       } else {
  //         setInput(input + key);
  //       }
  //     }
  //   }
  // };
  //
  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // });
  //
  return (
    <>
      <div className='calc-grid'>
        {/* onKeyDown={handleKeyDown} tabIndex={0}> */}
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
        <button onClick={() => handleInput(",")}>,</button>
        <button onClick={() => handleInput("+/-")}>+/-</button>
        <div hidden className='advFuncs-flex'>
          <button id='advMode' onClick={() => changeMode("advFuncs-flex")}>Adv</button>
          <button onClick={() => handleInput("^")}>^</button>
          <button onClick={() => handleInput("√(")}>√</button>
        </div>
      </div >
    </>
  )
}

export default App
