const prompt = require('prompt-sync')();
let s = prompt("Enter your sentence");
let a = [s];
let count = 0;
for (let i = s.length - 1; i >= 0; i--) {
    if (a[0][i] == 0 && count == 0)
    {
        count = 0;
        continue;
    }
    else if (a[0][i] != " ") {
        count++;
    }
    else {
        break;
    }
}


console.log(count);
