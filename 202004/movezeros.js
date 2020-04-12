/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var lastNonZeroFoundAt = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[lastNonZeroFoundAt++] = nums[i];
    }
  }

  console.log(lastNonZeroFoundAt);
  for (var i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 0, 1]));