/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  if (!shift || !shift[0]) {
    return s;
  };

  var arr = s.split("");
  shift.forEach((s => {
    var direction = s[0];
    var count = s[1];

    for (var i = 0; i < count; i++) {
      if (direction === 0) {
        var head = arr.shift();
        arr.push(head);
      } else if (direction === 1) {
        var tail = arr.pop();
        arr.unshift(tail);
      }
    }
  }));

  return arr.join('');
};