const prompt = require('prompt-sync')();
const math = require('math');

number = prompt("Enter the Number");

var isPalindrome = function (x) {
    let prev = x;
    let temp = prev.length;
    let rev = 0;
    for (let i = 0; i < temp; i++) {
        rev = (rev * 10) + (x % 10);
        x = math.floor(x / 10);
    }
    if (x < 0) {
        return false;
    }

    else if (prev == rev || x.length == 1) {
        return true;
    }

    else {
        return false;
    }
};

console.log(isPalindrome(number))