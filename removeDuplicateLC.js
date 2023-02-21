let array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

var removeDuplicates = function (nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            ans.push(nums[i])
        }
    }
    return ans;
};
console.log(removeDuplicates(array))