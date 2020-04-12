/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var c = 0;
  var length = nums.length;
  for (var i = 0; i < length; i++) {
    if (nums[i] === 0) {
      c++;
    }
  }

  var arr = [];
  for (var i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      arr.push(nums[i]);
    }
  }

  for (var i = 0; i < c; i++) {
    arr.push(0);
  }

  for (var i = 0; i < length; i++) {
    nums[i] = arr[i];
  }

  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));