let array = [3, 2, 2, 3]
let value = 3;
var removeElement = function (nums, val) {
    let length = nums.length
    let ans = [];
    for (let i = 0; i < length; i++) {
        if (nums[i] != val) {
            ans.push(nums[i]);
        }
    }

    return ans;
}  
console.log(removeElement(array, value))