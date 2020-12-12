let firstBtn = document.getElementById('calc-one');
let secondBtn = document.getElementById('calc-two');
let thirdBtn = document.getElementById('calc-three');
let fourthBtn = document.getElementById('calc-four');
let fifthBtn = document.getElementById('calc-five');
let sixthBtn = document.getElementById('calc-six');
let seventhBtn = document.getElementById('calc-seven');
let eighthBtn = document.getElementById('calc-eight');
let ninthBtn = document.getElementById('calc-nine');
let zeroBtn = document.getElementById('calc-zero');

let decimalBtn = document.getElementById('calc-decimal');
let clearBtn = document.getElementById('calc-clear');
let backBtn = document.getElementById('calc-backspace');
let valueDiv = document.getElementById('calc-value');


let calcNum = document.getElementsByClassName('calc-btn-num');
let calcOperators = document.getElementsByClassName('calc-btn-operator');
let displayVal = '0';
let pendingVal;
let evalStringArray = [];

let operate = (clickObj) => {
    let operateBtn = clickObj.target.innerText

    switch(operateBtn) {
        case '+':
            pendingVal=displayVal
            displayVal='0'
            valueDiv.innerHTML=pendingVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('+')
            break;

        case '-':
            pendingVal=displayVal
            displayVal='0'
            valueDiv.innerHTML=pendingVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('-')
            break;

        case 'x':
            pendingVal=displayVal
            displayVal='0'
            valueDiv.innerHTML=pendingVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('*')
            break;

        case '÷':
            pendingVal=displayVal
            displayVal='0'
            valueDiv.innerHTML=pendingVal
            evalStringArray.push(pendingVal)
            evalStringArray.push('/')
            break;

        case '=':
            evalStringArray.push(displayVal)
            let evaluate = eval(evalStringArray.join('  '))
            displayVal = evaluate + '';
            valueDiv.innerText = displayVal
            evalStringArray = []
            break;
             
        default:
            break;
    }
    

}

let updateValue = (clickObj) => {
    let btnText = clickObj.target.innerText;
    if (displayVal==='0') 
        displayVal=''
    
    displayVal+= btnText;
    valueDiv.innerText = displayVal;

}
for(let i=0; i<calcNum.length; i++) {
    calcNum[i].addEventListener('click', updateValue, false)

}
for(let i=0; i<calcOperators.length; i++) {
    calcOperators[i].addEventListener('click', operate, false)
    
}
clearBtn.onclick = () => {
    displayVal= '0'
    pendingVal= undefined
    evalStringArray = []
    valueDiv.innerText =displayVal
}
backBtn.onclick = () => {
    let lengthOfValue = displayVal.length
    displayVal = displayVal.slice(0, lengthOfValue - 1);
    if(displayVal ==='')
    displayVal='0';
    
    valueDiv.innerText = displayVal
}
decimalBtn.onclick = () => {
    if(!displayVal.includes('.'))
        displayVal += '.';
    valueDiv.innerText = displayVal;
}