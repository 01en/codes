/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  var ss = exec(S);
  var ts = exec(T);

  return ss === ts;
};

function exec(s) {
  var sArray = s.split('');
  for (var i = 0; i < sArray.length; i++) {
    var c = sArray[i];
    if (c === '#') {
      if (i >= 1) {
        sArray.splice(i - 1, 2);
      } else if (i === 0) {
        sArray.splice(0, 1);
      }
      i = -1;
    }
  }
  return sArray.join('');
}

// console.log(backspaceCompare("ab#c", "ad#c"));