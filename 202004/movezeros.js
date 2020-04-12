/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var c = 0;
  for (var i = 0; i < nums.length;) {
    var n = nums[i];
    if (n === 0) {
      c++;
      nums.splice(i, 1);
      i = 0;
    } else {
      i++;
    }
  }
  for (var j = 0; j < c; j++) {
    nums.push(0);
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 0, 1]));