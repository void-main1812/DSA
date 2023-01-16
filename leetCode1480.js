const prompt = require('prompt-sync')();

let nums = [1, 2, 3, 4, 5]
var sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
    nums[i] = sum;
    console.log(nums[i])
}