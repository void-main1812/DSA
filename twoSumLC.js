let array = [1, 2, 3, 4];       //Sample Input
var twoSum = function (nums, target) {
    var ans = [1, 2];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                ans[0] = i;
                ans[1] = j;
            }
        }
    }
    return ans;
};

console.log(twoSum(array, 4))       // Output = [0, 2]