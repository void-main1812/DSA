// const prompt = require('prompt-sync')();
let num = [3];
let max1 = 0;
let max2 = 0;
console.log(num.length)
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
        if (num[j] > num[i]) {
            max1 = num[j];
        }
        else {
            max1 = num[i];
        }
    }
}
console.log(max1)
console.log(num.indexOf(max1))
let rmv = num.indexOf(max1);
num.splice(rmv, 1)
console.log(num)
for (let i = 0; i < num.length; i++) {
    if(num.length == 1)
    {
        max2 = num[0];
    }
    else
    {
        for (let j = 0; j < num.length; j++) {
            if (num[j] > num[i] && num[j] < max1) {
                max2 = num[j];
            }
        }
    }
}
console.log(max1, max2)
console.log((max1-1)*(max2-1))