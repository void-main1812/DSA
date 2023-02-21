const prompt = require('prompt-sync')();
let num = prompt("Enter number");
function fibonacci(num) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    console.log(arr);
}

fibonacci(num)

