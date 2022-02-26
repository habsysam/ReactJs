import React from "react";
// import { add } from '../utils/calculator.js

function CalculatorComp(){
    const handleClick = (n1, n2) => {
        // const sum = add(n1, n2)
        // console.log('Sum', sum);

        // dynamic import
        // code splitting
        import('../utils/calculator.js').then((calci) => {
            const sum = calci.add(n1, n2)
            console.log('Sum', sum);
        })
    }
    return <div>
        <button onClick={() => {
            handleClick(10, 20)
        }}>
            Add
        </button>
    </div>;
}

export default CalculatorComp;