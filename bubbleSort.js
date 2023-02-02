const prompt = require('prompt-sync')();

let length = Number(prompt("Enter the length of array"));
let arr = [];
for (let i = 0; i < length; i++) {
    arr[i] = Number(prompt(""));
}

function bubble(a, l) {
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (a[i] > a[j]) {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    return a;
}

let sortedArr = bubble(arr, length)

console.log(sortedArr);