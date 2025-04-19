"use strict";
// const p = document.querySelectorAll('p');
// const p = document.querySelectorAll<HTMLParagraphElement>('.para');
// console.log((p[0]).innerText);
// p.forEach(para => {
//     console.log((para as HTMLParagraphElement).innerText);
// })
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
// var result: number = Number(num1?.value) + Number(num2?.value);
var p = document.querySelector('#result');
var btn = document.querySelector('#sum');
// num1.addEventListener('input', (e: Event) => {
//     console.log((e.target as HTMLInputElement).value);
// })
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    try {
        if (p == null)
            throw new Error("P is null");
        if (!(p instanceof HTMLParagraphElement))
            throw new Error("num1 is not html input element ");
        // p.innerText = (Number(num1.value) + Number(num2.value)).toString();
        p.innerText = String(Number(num1.value) + Number(num2.value));
    }
    catch (exception) {
        console.error(exception);
    }
});
