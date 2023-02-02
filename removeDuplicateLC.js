let array = [0, 0, 0, 0, 0, 0]

var removeDuplicates = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (nums[i] == nums[j] && i != j) {
                nums[j] = " ";
                var dup = nums.indexOf(" ");
                console.log(String(dup))
                nums.splice(dup, 1);
            }
        }
    }

    console.log(nums)
};
removeDuplicates(array)