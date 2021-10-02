let number1 = ``;
let number2 = ``;
let result = ``;
let mathAction = false;
let mathActionType;

let display = document.getElementById(`result`)
display.innerHTML = result;

const num0 = () => {
    if (!mathAction && number1.length > 0 && number1.length <= 13) number1 += 0;
    else if (mathAction && number2.length > 0 && number2.length <= 13) number2 += 0;
    display.innerHTML = !mathAction ? number1 : number2;
    if (display.innerHTML === ``) display.innerHTML = 0;
}
const numAction = (num) => {
    if (!mathAction && number1.length <= 13) number1 += num;
    else if (mathAction && number2.length <= 13) number2 += num;
    display.innerHTML = !mathAction ? number1 : number2;
}
const symbolPoint = () => {
    if (!mathAction && number1.includes(`.`) || mathAction && number2.includes(`.`)) return;
    if (!mathAction && number1.length === 0) number1 += `0.`
    else if (!mathAction && number1.length <= 12) number1 += `.`;
    else if (mathAction && number2.length === 0) number2 += `0.`;
    else number2 += `.`;
    display.innerHTML = !mathAction ? number1 : number2;
}
const cleaner = () => {
    if (!mathAction) {
        if (number1[number1.length - 2] === `.`) number1 = number1.slice(0, number1.length - 2);
        else number1 = number1.slice(0, number1.length - 1);
    }
    else {
        if (number2[number2.length - 2] === `.`) number2 = number2.slice(0, number2.length - 2);
        else number2 = number2.slice(0, number2.length - 1);
    }
    display.innerHTML = !mathAction ? number1 : number2;
}

const mathCalculation = (type, sign) => {
    if (result !== ``) number2 = ``;
    mathAction = true;
    mathActionType = type;
    display.innerHTML = sign;
}
const root = () => {
    mathActionType = `root`;
    display.innerHTML = !mathAction ? `√` + number1 : `√` + number2;
}
const percent = () => {
    mathAction = true;
    mathActionType = `percent`;
    display.innerHTML = !mathAction ? number1 + `%` : number2 + `%`;
}
const mathResult = () => {
    if (mathActionType === `plus`) result = (result !== ``) ? result + +number2 : +number1 + +number2;
    else if (mathActionType === `minus`) result = (result !== ``) ? result - +number2 : +number1 - +number2;
    else if (mathActionType === `multiply`) result = (result !== ``) ? result * +number2 : +number1 * +number2;
    else if (mathActionType === `divide`) result = (result !== ``) ? result / +number2 : +number1 / +number2;
    else if (mathActionType === `root`) result = number1 ** (1 / 2);
    else if (mathActionType === `percent`) result = number1 * number2 / 100;
    else result = `Error 404!`

    if (result.toString().length >= 14) result = result.toString().slice(0, 12) + `e${result.toString().length - 12}`;

    display.innerHTML = result;
}
const power = () => {
    number1 = ``;
    number2 = ``;
    result = ``;
    mathAction = false;
    if (display.innerHTML !== ``) display.innerHTML = ``;
    else display.innerHTML = 0;
}

document.addEventListener('keydown', function(event) {
    if (event.code == "Numpad0") num0();
    for(let i = 1; i <= 9; i++) if(event.code == `Numpad${i}`) numAction(i);
    if (event.code == "NumpadAdd") mathCalculation(`plus`,`+`);
    if (event.code == "NumpadSubtract") mathCalculation(`minus`,`-`);
    if (event.code == "NumpadDivide") mathCalculation(`divide`,`÷`);
    if (event.code == "NumpadMultiply") mathCalculation(`multiply`,`x`);
    if (event.code == "NumpadDecimal") symbolPoint();
    if (event.code == "NumpadEnter") mathResult(); 
    if (event.code == "Backspace") cleaner();
  });













// let number1 = ``;
// let number2 = ``;
// let result = 0;
// let mathAction = false;
// let mathActionType;

// let display = document.getElementById(`result`)
// display.innerHTML = result;

// const num0 = () => {
//     if (mathAction === false && number1.length > 0 && number1.length <= 13) number1 += 0;
//     else if(number2.length > 0 && number2.length <= 13) number2 += 0;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const num1 = () => {
//     if (mathAction === false && number1.length <= 13) number1 += 1;
//     else if(mathAction === true && number2.length <= 13) number2 += 1;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const num2 = () => {
//     if (mathAction === false && number1.length <= 13) number1 += 2;
//     else if(mathAction === true && number2.length <= 13) number2 += 2;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const num3 = () => {
//     if (mathAction === false && number1.length <= 13) number1 += 3;
//     else if(mathAction === true && number2.length <= 13) number2 += 3;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const num4 = () => {
//     if (mathAction === false && number1.length <= 13) number1 += 4;
//     else if(mathAction === true && number2.length <= 13) number2 += 4;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const num5 = () => {
//     if (mathAction === false && number1.length <= 13) number1 += 5;
//     else if(mathAction === true && number2.length <= 13) number2 += 5;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const num6 = () => {
//     if (mathAction === false && number1.length <= 13) number1 += 6;
//     else if(mathAction === true && number2.length <= 13) number2 += 6;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const num7 = () => {
//     if (mathAction === false && number1.length <= 13) number1 += 7;
//     else if(mathAction === true && number2.length <= 13) number2 += 7;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const num8 = () => {
//     if (mathAction === false && number1.length <= 13) number1 += 8;
//     else if(mathAction === true && number2.length <= 13) number2 += 8;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const num9 = () => {
//     if (mathAction === false && number1.length <= 13) number1 += 9;
//     else if(mathAction === true && number2.length <= 13) number2 += 9;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const symbolPoint = () => {
//     if (mathAction === false && number1.length <= 12) number1 += `.`;
//     else number2 += `.`;
//     display.innerHTML = mathAction === false ? number1 : number2;
// }
// const cleaner = () => {
//     if (mathAction === false) {
//         if (number1[number1.length - 2] === `.`) number1 = number1.slice(0, number1.length - 2);
//         else number1 = number1.slice(0, number1.length - 1);
//     }
//     else {
//         // number2 = number2.slice(0, number2.length - 1);
//         if (number2[number2.length - 2] === `.`) number2 = number2.slice(0, number2.length - 2);
//         else number2 = number2.slice(0, number2.length - 1);
//     }
//     display.innerHTML = mathAction === false ? number1 : number2;
// }

// const plus = () => {
//     mathAction = true;
//     mathActionType = `plus`;
//     display.innerHTML = `+`;
// }
// const minus = () => {
//     mathAction = true;
//     mathActionType = `minus`
//     display.innerHTML = `-`;
// }
// const multiply = () => {
//     mathAction = true;
//     mathActionType = `multiply`
//     display.innerHTML = `x`;
// }
// const divide = () => {
//     mathAction = true;
//     mathActionType = `divide`;
//     display.innerHTML = `÷`;
// }
// const root = () => {
//     mathActionType = `root`;
//     display.innerHTML = mathAction === false ? `√` + number1 : `√` + number2;
// }
// const percent = () => {
//     mathAction = true;
//     mathActionType = `percent`;
//     display.innerHTML = mathAction === false ? number1 + `%` : number2 + `%`;
// }
// const mathResult = () => {
//     if (mathActionType === `plus`) result = +number1 + +number2;
//     else if (mathActionType === `minus`) result = +number1 - +number2;
//     else if (mathActionType === `multiply`) result = +number1 * +number2;
//     else if (mathActionType === `divide`) result = +number1 / +number2;
//     else if (mathActionType === `root`) result = number1 ** (1 / 2);
//     else if (mathActionType === `percent`) result = number1 * number2 / 100;
//     else result = `Error 404!`

//     if(result.toString().length >= 14) result = result.toString().slice(0,12) + `e${result.toString().length - 12}`;

//     display.innerHTML = result;
// }
// const power = () => {
//     number1 = ``;
//     number2 = ``;
//     result = 0;
//     display.innerHTML = ``;
//     mathAction = false;
//     display.innerHTML = result;
// }

