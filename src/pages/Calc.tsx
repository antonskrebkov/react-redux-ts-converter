import { useState } from "react";
import "../assets/styles/styles.css";
import PrettyInput from "../components/UI/input/PrettyInput";

export default function Calc() {
  const [calcQuery, setCalcQuery] = useState("0");
  const [disabler, setDisabler] = useState(false);
  const [dotDisabler, setDotDisabler] = useState(false);

  function changeSignCalc() {
    let arr = ["+", "-", "/", "*"];
    let point;
    let b;

    for (let i = 0; i < arr.length; i++) {
      if (String(calcQuery).indexOf(arr[i]) !== -1) {
        point = String(calcQuery).indexOf(arr[i]);
        break;
      } else {
        point = 0;
      }
    }
    if (point === 0) {
      b = +calcQuery;
      b = -b;
      setCalcQuery(String(b));
    } else {
      if (point) {
        b = +calcQuery.split("").splice(++point).join("");
        b = -b;
        setCalcQuery(String(calcQuery).split("").splice(0, point).join("") + b);
      }
    }
  }

  function percentCalc() {
    let arr = ["+", "-", "/", "*"];
    let point;
    let b;

    for (let i = 0; i < arr.length; i++) {
      if (String(calcQuery).indexOf(arr[i]) !== -1) {
        point = calcQuery.indexOf(arr[i]);
        break;
      } else {
        point = 0;
      }
    }
    if (point === 0) {
      b = +calcQuery;
    } else {
      if (point) {
        b = +calcQuery.split("").splice(++point).join("");
      }
    }
    if (b) {
      b = b * 0.01;
      setCalcQuery(String(calcQuery).split("").splice(0, point).join("") + b);
    }
  }

  function calcResult(event: any) {
    let arr = ["+", "/", "*", "-"];
    let point;
    let a;
    let b;
    let divider;
    let result;

    for (let i = 0; i < arr.length; i++) {
      if (calcQuery.indexOf(arr[i]) !== -1) {
        divider = arr[i];
        point = calcQuery.indexOf(arr[i]);
        break;
      }
    }
    if (point) {
      a = +calcQuery.split("").splice(0, point).join("");
      b = +calcQuery.split("").splice(++point).join("");
    }

    if (a && b) {
      switch (divider) {
        case "+":
          result = a + b;
          if (!Number.isInteger(result)) {
            if (
              event.target.value == "+" ||
              event.target.value == "-" ||
              event.target.value == "/" ||
              event.target.value == "*"
            ) {
              setCalcQuery(result.toFixed(2) + event.target.value);
              // setDotDisabler(false)
            } else {
              setCalcQuery(result.toFixed(2));
            }
          } else {
            if (
              event.target.value == "+" ||
              event.target.value == "-" ||
              event.target.value == "/" ||
              event.target.value == "*"
            ) {
              setCalcQuery(result + event.target.value);
              // setDotDisabler(false)
            } else {
              setCalcQuery(String(result));
            }
          }
          break;
        case "-":
          result = a - b;
          if (!Number.isInteger(result)) {
            if (
              event.target.value == "+" ||
              event.target.value == "-" ||
              event.target.value == "/" ||
              event.target.value == "*"
            ) {
              setCalcQuery(result.toFixed(2) + event.target.value);
              // setDotDisabler(false)
            } else {
              setCalcQuery(result.toFixed(2));
            }
          } else {
            if (
              event.target.value == "+" ||
              event.target.value == "-" ||
              event.target.value == "/" ||
              event.target.value == "*"
            ) {
              setCalcQuery(result + event.target.value);
              // setDotDisabler(false)
            } else {
              setCalcQuery(String(result));
            }
          }
          break;
        case "/":
          result = a / b;
          if (!Number.isInteger(result)) {
            if (
              event.target.value == "+" ||
              event.target.value == "-" ||
              event.target.value == "/" ||
              event.target.value == "*"
            ) {
              setCalcQuery(result.toFixed(2) + event.target.value);
              // setDotDisabler(false)
            } else {
              setCalcQuery(result.toFixed(2));
            }
          } else {
            if (
              event.target.value == "+" ||
              event.target.value == "-" ||
              event.target.value == "/" ||
              event.target.value == "*"
            ) {
              setCalcQuery(result + event.target.value);
              // setDotDisabler(false)
            } else {
              setCalcQuery(String(result));
            }
          }
          break;
        case "*":
          result = a * b;
          if (!Number.isInteger(result)) {
            if (
              event.target.value == "+" ||
              event.target.value == "-" ||
              event.target.value == "/" ||
              event.target.value == "*"
            ) {
              setCalcQuery(result.toFixed(2) + event.target.value);
              // setDotDisabler(false)
            } else {
              setCalcQuery(result.toFixed(2));
            }
          } else {
            if (
              event.target.value == "+" ||
              event.target.value == "-" ||
              event.target.value == "/" ||
              event.target.value == "*"
            ) {
              setCalcQuery(result + event.target.value);
              // setDotDisabler(false)
            } else {
              setCalcQuery(String(result));
            }
          }
          break;
        default:
          result = "Error";
          setCalcQuery(result);
          break;
      }
    }
  }

  function dotHandler(event: any) {
    setCalcQuery(calcQuery + event.target.value);
    setDotDisabler(true);
  }

  function mathHandler(event: any) {
    setDotDisabler(false);
    if (
      String(calcQuery).includes("+") ||
      String(calcQuery).includes("-") ||
      String(calcQuery).includes("/") ||
      String(calcQuery).includes("*")
    ) {
      calcResult(event);
    } else {
      setCalcQuery(calcQuery + event.target.value);
    }
  }

  function numberHandler(event: any) {
    if (calcQuery === "0") {
      setCalcQuery(event.target.value);
    } else {
      setCalcQuery(calcQuery + event.target.value);
    }
  }

  return (
    <div className="App bg-gray-600">
      <div className="calc-body shadow-2xl">
        <PrettyInput
          className="field"
          type="text"
          value={calcQuery}
          onChange={(event: any) => setCalcQuery(event.target.value)}
          onSubmit={calcResult}
        />
        <div className="buttons">
          <div className="buttons_row">
            <input
              className="spec"
              type="button"
              value="AC"
              onClick={(event) => setCalcQuery("0")}
            />
            <input
              className="spec"
              type="button"
              value="+/-"
              onClick={changeSignCalc}
            />
            <input
              className="spec"
              type="button"
              value="%"
              onClick={percentCalc}
            />
            <input
              className="math"
              type="button"
              value="/"
              disabled={disabler}
              onClick={mathHandler}
            />
          </div>
          <div className="buttons_row">
            <input type="button" value="7" onClick={numberHandler} />
            <input type="button" value="8" onClick={numberHandler} />
            <input type="button" value="9" onClick={numberHandler} />
            <input
              className="math"
              type="button"
              value="*"
              disabled={disabler}
              onClick={mathHandler}
            />
          </div>
          <div className="buttons_row">
            <input type="button" value="4" onClick={numberHandler} />
            <input type="button" value="5" onClick={numberHandler} />
            <input type="button" value="6" onClick={numberHandler} />
            <input
              className="math"
              type="button"
              value="-"
              disabled={disabler}
              onClick={mathHandler}
            />
          </div>
          <div className="buttons_row">
            <input type="button" value="1" onClick={numberHandler} />
            <input type="button" value="2" onClick={numberHandler} />
            <input type="button" value="3" onClick={numberHandler} />
            <input
              className="math"
              type="button"
              value="+"
              disabled={disabler}
              onClick={mathHandler}
            />
          </div>
          <div className="buttons_row">
            <input
              style={{ width: 90 + "px", borderRadius: 20 + "px" }}
              type="button"
              value="0"
              onClick={numberHandler}
            />
            <input
              type="button"
              value="."
              disabled={dotDisabler}
              onClick={dotHandler}
            />
            <input
              className="math"
              type="button"
              value="="
              onClick={calcResult}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
