let s = "0P";
for(let i = 0; i<s.length; i++)
{
    if(s[i] = /[^0-9]/)
    {
        console.log(false)
        break;
    }
}
let sample = s.replace(/[^a-zA-Z ]/g, "");
let array = sample.split(' ');


let sum = array.join('');
let array1 = sum.split('')


let string1 = array1.join('').toLowerCase();
let string = array1.reverse();
let ans = string.join('').toLowerCase();

console.log(ans)
console.log(string1 == ans)