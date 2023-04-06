import React, { useState } from "react";
import NumberButton from "../components/UI/buttons/NumberButton";
import SpecButton from "../components/UI/buttons/SpecButton";
import MathButton from "../components/UI/buttons/MathButton";
import PrettyInput from "../components/UI/input/PrettyInput";

const Calc: React.FC = () => {
  const [calcQuery, setCalcQuery] = useState<string>("0");
  const [dotDisabler, setDotDisabler] = useState<boolean>(false);

  function changeSignCalc(): void {
    let arr: string[] = ["+", "-", "/", "*"];
    let point: number = 0;
    let b: number;

    for (let i = 0; i < arr.length; i++) {
      if (calcQuery.indexOf(arr[i]) !== -1) {
        point = calcQuery.indexOf(arr[i]);
        break;
      }
    }
    if (point === 0) {
      b = -+calcQuery;
      setCalcQuery(String(b));
    } else {
      b = -+calcQuery.split("").splice(++point).join("");
      setCalcQuery(calcQuery.split("").splice(0, point).join("") + b);
    }
  }

  function percentCalc(): void {
    let arr: string[] = ["+", "-", "/", "*"];
    let point: number = 0;
    let b: number;

    for (let i = 0; i < arr.length; i++) {
      if (calcQuery.indexOf(arr[i]) !== -1) {
        point = calcQuery.indexOf(arr[i]);
        break;
      }
    }
    if (point === 0) {
      b = +calcQuery;
    } else {
      b = +calcQuery.split("").splice(++point).join("");
    }
    b = b * 0.01;
    setCalcQuery(calcQuery.split("").splice(0, point).join("") + b);
  }

  function calcResult(event: React.MouseEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    let arr = ["+", "/", "*", "-"];
    let breakpoint: number = 0;
    let a: number = 0;
    let b: number = 0;
    let mathSign: string = "";
    let result: number | string;

    for (let i = 0; i < arr.length; i++) {
      if (calcQuery.indexOf(arr[i]) !== -1) {
        mathSign = arr[i];
        breakpoint = calcQuery.indexOf(arr[i]);
        break;
      }
    }

    if (breakpoint) {
      a = +calcQuery.split("").splice(0, breakpoint).join("");
      b = +calcQuery.split("").splice(++breakpoint).join("");
    }

    switch (mathSign) {
      case "+":
        result = a + b;
        if (!Number.isInteger(result)) {
          if (target.value === "=") {
            setCalcQuery(result.toFixed(2));
          } else {
            setCalcQuery(result.toFixed(2) + target.value);
          }
        } else {
          if (target.value === "=") {
            setCalcQuery(String(result));
          } else {
            setCalcQuery(result + target.value);
          }
        }
        break;
      case "-":
        result = a - b;
        if (!Number.isInteger(result)) {
          if (target.value === "=") {
            setCalcQuery(result.toFixed(2));
          } else {
            setCalcQuery(result.toFixed(2) + target.value);
          }
        } else {
          if (target.value === "=") {
            setCalcQuery(String(result));
          } else {
            setCalcQuery(result + target.value);
          }
        }
        break;
      case "/":
        result = a / b;
        if (!Number.isInteger(result)) {
          if (target.value === "=") {
            setCalcQuery(result.toFixed(2));
          } else {
            setCalcQuery(result.toFixed(2) + target.value);
          }
        } else {
          if (target.value === "=") {
            setCalcQuery(String(result));
          } else {
            setCalcQuery(result + target.value);
          }
        }
        break;
      case "*":
        result = a * b;
        if (!Number.isInteger(result)) {
          if (target.value === "=") {
            setCalcQuery(result.toFixed(2));
          } else {
            setCalcQuery(result.toFixed(2) + target.value);
          }
        } else {
          if (target.value === "=") {
            setCalcQuery(String(result));
          } else {
            setCalcQuery(result + target.value);
          }
        }
        break;
      default:
        result = "Error";
        setCalcQuery(result);
        break;
    }
  }

  function dotHandler(event: React.MouseEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    setCalcQuery(calcQuery + target.value);
    setDotDisabler(true);
  }

  function handleMath(event: React.MouseEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    setDotDisabler(false);
    if (
      calcQuery.includes("+") ||
      calcQuery.includes("-") ||
      calcQuery.includes("/") ||
      calcQuery.includes("*")
    ) {
      if (
        calcQuery[calcQuery.length - 1] === "+" ||
        calcQuery[calcQuery.length - 1] === "-" ||
        calcQuery[calcQuery.length - 1] === "/" ||
        calcQuery[calcQuery.length - 1] === "*"
      ) {
        setCalcQuery(calcQuery.slice(0, calcQuery.length - 1) + target.value);
      } else {
        calcResult(event);
      }
    } else {
      setCalcQuery(calcQuery + target.value);
    }
  }

  function handleNumber(event: React.MouseEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    if (calcQuery === "0") {
      setCalcQuery(target.value);
    } else {
      setCalcQuery(calcQuery + target.value);
    }
  }

  return (
    <div className="App flex justify-center items-center bg-gray-600">
      <div className="calc-body scale-125 sm:scale-150 shadow-2xl">
        <PrettyInput
          className="field"
          type="text"
          value={calcQuery}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCalcQuery(event.target.value)
          }
          onSubmit={calcResult}
        />
        <div className="buttons">
          <div className="flex">
            <SpecButton value="AC" handleClick={() => setCalcQuery("0")} />
            <SpecButton value="+/-" handleClick={changeSignCalc} />
            <SpecButton value="%" handleClick={percentCalc} />
            <MathButton value="/" handleClick={handleMath} />
          </div>
          <div className="flex">
            <NumberButton value="7" handleClick={handleNumber} />
            <NumberButton value="8" handleClick={handleNumber} />
            <NumberButton value="9" handleClick={handleNumber} />
            <MathButton value="*" handleClick={handleMath} />
          </div>
          <div className="flex">
            <NumberButton value="4" handleClick={handleNumber} />
            <NumberButton value="5" handleClick={handleNumber} />
            <NumberButton value="6" handleClick={handleNumber} />
            <MathButton value="-" handleClick={handleMath} />
          </div>
          <div className="flex">
            <NumberButton value="1" handleClick={handleNumber} />
            <NumberButton value="2" handleClick={handleNumber} />
            <NumberButton value="3" handleClick={handleNumber} />
            <MathButton value="+" handleClick={handleMath} />
          </div>
          <div className="flex">
            <input
              className="zero h-10 bg-zinc-800 text-lg text-white cursor-pointer transition duration-200 mx-auto my-0 hover:opacity-60"
              type="button"
              value="0"
              onClick={handleNumber}
            />
            <NumberButton
              value="."
              disabler={dotDisabler}
              handleClick={dotHandler}
            />
            <MathButton value="=" handleClick={calcResult} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
