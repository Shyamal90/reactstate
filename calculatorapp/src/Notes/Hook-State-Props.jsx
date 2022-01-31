import React, { useState } from 'react'
import "./hookStateProps.css"


 //flags
 let plus = false;
 let minus = false;
 let multiple = false;
 let division = false;

function Hook_State_Props() {
    let num = [1,2,3,4,5,6,7,8,9,0,"=","+","-","*","%","C"];

    //holding data 
    let [currValue,setCurrValue] = useState(0);

   

    //hooks for change state in input field
    let [currNumber , setCurrNumber] = useState("0")

    const typeNum = (currDigit)=>{
        if(currDigit === 1 || currDigit === 2 || currDigit === 3 || currDigit === 4 || currDigit === 5 || currDigit === 6 || currDigit === 7 || currDigit === 8 || currDigit === 9 || currDigit === 0){
            if(currNumber === "0"){
                currNumber = "" + currDigit;
            }else if(typeof(currNumber) === "string"){
                currNumber += currDigit;
            }else if(typeof(currNumber) === "number"){
                currNumber = "" + currDigit;
            }
            setCurrNumber(currNumber)
        }else if(currDigit === "C"){
            // console.log(currDigit);
            if(currNumber !== "0" && currNumber.length !== 0){
                currNumber = currNumber.slice(0,-1);
                
            }else if(currNumber.length === 0){
                // console.log(currNumber.length);
                currNumber = 0;
            }
            setCurrNumber(currNumber)
        }else if(currDigit === "+"){
            plus = true;
            if(currValue === 0){
                currValue = +currNumber;  
            }else{
                currValue = currValue + +currNumber;
            }

            //change state of input field
            setCurrNumber("");

            //change state of total value 
            setCurrValue(currValue)
            // console.log(plus);
            // console.log(currValue);
        }else if(currDigit === "-"){
            minus = true;
            if(currValue === 0){
                currValue = +currNumber;  
            }else{
                currValue = currValue - +currNumber;
            }

            //change state of input field
            setCurrNumber("");

            //change state of total value 
            setCurrValue(currValue)

            console.log(currValue);
        }else if(currDigit === "*"){
            multiple = true;
            if(currValue === 0){
                currValue = +currNumber;  
            }else{
                currValue = currValue * +currNumber;
            }

            //change state of input field
            setCurrNumber("");

            //change state of total value 
            setCurrValue(currValue)

            console.log(currValue);
        }else if(currDigit === "%"){
            division = true;
            if(currValue === 0){
                currValue = +currNumber;  
            }else{
                currValue = (currValue / +currNumber).toFixed(3);
            }

            //change state of input field
            setCurrNumber("");

            //change state of total value 
            setCurrValue(currValue)

            console.log(currValue);
        }else if(currDigit === "="){
            // console.log(plus);
            if(plus === true){
                // console.log("plus");
                currValue = currValue + +currNumber;
                plus = false;
            }else if(minus === true){
                currValue = currValue - +currNumber;
                minus = false;
            }else if(multiple === true){
                currValue = currValue * +currNumber;
                multiple = false;
            }else if(division === true){
                currValue = (currValue / +currNumber).toFixed(3);
                division = false;
            }
            // console.log("currValue  " +currValue)
            //change state of total value 
            setCurrValue(currValue)

            //change state of input field
            setCurrNumber(currValue);

            //change state of total value 
            setCurrValue(0)

        }
        console.log(currNumber);
        //|| currDigit === "-" || currDigit === "*"  || currDigit === "%"
    }
    return (
        <div id='container'>
            <h1 class="heading">React Hook</h1>
            <ul>
                <li>React 16.8.0 is the first release to support Hooks.</li>
                <li>Hooks allow you to reuse stateful logic without changing your component hierarchy.</li>
                <li>Don’t call Hooks inside loops, conditions, or nested functions. </li>
                <li> Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders.</li>
                <li>
                    All type of hooks in React
                    <ul>
                        <li>useState</li>
                        <li>useEffect</li>
                        <li>useContext</li>
                        <li>useLayoutEffect</li>
                        <li>useReducer</li>
                        <li>useCallback</li>
                        <li>useMemo</li>
                        <li>useRef</li>
                    </ul>
                </li>
            </ul>

            <h1 className='heading'>useState</h1>
            <ul>
                <li> <strong>Syntax:</strong> const [currentState,updateState] = useState(value of currentState)
                      <br/><br/>
                      Here, "currentState" is a variable that holds current state of the variable.
                            <br/>
                            "updateState" is a function that helps to change the state.
                            <br/>
                            And "useState" is a function and take one argument that is the current value of current State
                </li>
            </ul>

            <h1 className='heading'>Creating Calculator Using React Hooks</h1>
            <div className="calculator">
                <div className="project">
                    <input type="number" name="" id="field" value={currNumber}/>

                    <div className="operationBtn">
                        {
                            num.map((currNum)=>{
                                return <button className='numBtn' onClick={()=>typeNum(currNum)}>{currNum}</button>
                            })
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Hook_State_Props
