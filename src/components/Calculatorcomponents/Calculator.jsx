import React, { useState } from 'react'
import Display from './Display'
import CalculatorKey from './CalculatorKey'

function Calculator() {

    const [value, setValue] = useState("");
    const [previousValue, setPreviousValue] = useState("");

    const keys = ["C", "/", "*", "-", "7", "8", "9", "+", "4", "5", "6", "1", "2", "3", "=", "", "0", "."]

    const onKeyDown = (key) => {
        if (key === "C") setValue("");
        else if (key === "=") {
            if (/[+\-*/]$/.test(value)) return;
            else {
                const combined = previousValue + value
                
                setValue(Calculate(Tokenize(combined)));
                setPreviousValue("");
            }
        }
        else if (/[+\-*/]/.test(value)) {
            if (/[+\-*/]/.test(key)) return
            else {
                setPreviousValue(previousValue + value);
                if (key === ".") {
                    setValue("0.")
                }
                else setValue(key)
            }
        }
        else if (value === "" && /[+\-*/]/.test(key)) return;
        else {
            if (key === "." && !value.includes(".")) setValue(value === "" ? "0." : value + ".")
            else if (key === "." && value.includes(".")) return;
            else if (value === "0" && key === "0") return;
            else if (value === "0" && key !== ".") setValue(key);
            else setValue(value + key);
        }
    }

    const Tokenize = (data) => {
        const tokens = [];
        let num = "";

        for (let char of data) {
            if ('0123456789.'.includes(char)) num += char
            else if ('+-*/'.includes(char)) {
                if (num) {
                    tokens.push(num);
                    num = ""
                }
                tokens.push(char);
            }
        }
        if (num) tokens.push(num);
        return tokens
    }

    const Calculate = (tokens) => {
        let i = 0;
        while (i < tokens.length) {
            if (tokens[i] === "*" || tokens[i] === "/") {
                const a = parseFloat(tokens[i - 1]);
                const b = parseFloat(tokens[i + 1]);
                const result = tokens[i] === "*" ? a * b : a / b;

                tokens.splice(i - 1, 3, result.toString());
                i = i - 1;
            } else {
                i++;
            }
        }

        let result = parseFloat(tokens[0]);
        i = 1;
        while (i < tokens.length) {
            const operator = tokens[i];
            const nextNumber = parseFloat(tokens[i + 1]);
            if (operator === "+") result += nextNumber;
            if (operator === "-") result -= nextNumber;
            i += 2;
        }
        console.log(result)
        return result;
    }

    return (
        <div className='Calculator'>
            <Display value={value}></Display>
            <div className='KeysContainer'>
                {
                    keys.map((key) => (<CalculatorKey key={key} onClick={onKeyDown} className={`${key} Key`} value={key} />))
                }
            </div>
        </div>
    )
}

export default Calculator
