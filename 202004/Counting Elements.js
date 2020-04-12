/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  var set = {};
  arr.forEach(n => {
    if (set[n] === undefined) {
      set[n] = 0;
    }
    set[n]++;
  });

  const keys = Object.keys(set).sort((a, b) => a - b);
  // console.log(set);
  // console.log(keys);
  var count = 0;
  // count:n, n+1
  for (var i = 0; i < keys.length - 1; i++) {
    const x = Number(keys[i]);
    const x1 = Number(keys[i + 1]);
    if (x1 == x + 1) {
      count += set[keys[i]];
    }
  }
  return count;
};
console.log(countElements([4, 10, 11, 11, 1, 9, 6, 2, 4, 5, 8]));