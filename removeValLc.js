let array = [0, 1, 2, 2, 3, 0, 4, 2]
let value = 2;
let ans = [];
for(let i = 0; i< array.length; i++)
{
    let j = 0;
    if(array[i] != value)
    {
        ans[j++] = array[i]; 
    }
}
console.log(ans)