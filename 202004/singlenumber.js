/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var sorted = nums.sort();
  for (var i = 0; i < sorted.length - 2; i = i + 2) {
    if (sorted[i] !== sorted[i + 1]) {
      return sorted[i];
    }
  }
  if (i == sorted.length - 1) {
    if (sorted[i - 1] !== sorted[i]) {
      return sorted[i];
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));