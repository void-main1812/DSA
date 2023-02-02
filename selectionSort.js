const prompt = require('prompt-sync')();
let length = Number(prompt("enter the length of array"));
let arr = []

for (let i = 0; i < length; i++) {
    arr[i] = Number(prompt(""))
}

function selection(a, l) {
    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            let min = a[j] < a[j + 1] ? j : j + 1;
            if (a[i] > a[min]) {
                let temp = a[min];
                a[min] = a[i]
                a[i] = temp;
            }
        }
    }

    return a;
}

let sortedArr = selection(arr, length)

console.log(sortedArr);