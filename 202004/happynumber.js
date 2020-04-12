/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var calcedValues = new Set();

  var mayHappyNumber = n;
  while (!check(mayHappyNumber)) {
    mayHappyNumber = calc(mayHappyNumber);

    if (calcedValues.has(mayHappyNumber)) {
      return false;
    } else {
      calcedValues.add(mayHappyNumber);
    }

  }
  return true;
};

var calc = function (n) {
  var nums = n.toString()
    .split('')
    .map(n => Math.pow(Number(n), 2));
  nums = nums.reduce((accumrator, currenValue) => accumrator + currenValue);
  return nums;
}

var check = function (n) {
  if (n === 1) {
    return true;
  }
  return false;
}

// console.log(isHappy(19));