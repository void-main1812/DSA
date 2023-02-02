const prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

function sum(x, y) {
    return x + y;
}

let ans = sum(num1, num2);

console.log(ans)