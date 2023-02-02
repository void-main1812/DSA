const prompt = require('prompt-sync')();

let num = Number(prompt("enter the number"));

function factorial(n)
{
    let fact = 1;
    for(let i = 1;i<=n;i++)
    {
        fact = fact*i;
    }

    return fact;
}

let ans = factorial(num);

console.log(ans)